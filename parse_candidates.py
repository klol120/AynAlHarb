import json
import re
from pathlib import Path

INPUT_FILE = Path("telegram_feed.jsonl")
OUTPUT_FILE = Path("incident_candidates.json")

STATEMENT_RE = re.compile(r"Statement Issued by .*?\((\d+)\)", re.IGNORECASE)
TIME_RE = re.compile(r"\bat\s+(\d{1,2}:\d{2}\s?[AP]M)\b", re.IGNORECASE)
HASHTAG_RE = re.compile(r"#([A-Za-z0-9_]+)")

LOCATION_PATTERNS = [
    re.compile(r"\bin the town of ([A-Za-z\-\[\]\' ]+?)(?: at| with| using| near|,|\.|\n)", re.IGNORECASE),
    re.compile(r"\bnear ([A-Za-z\-\[\]\' ]+?)(?: with| using|,|\.|\n)", re.IGNORECASE),
    re.compile(r"\bon the western outskirts of the town of ([A-Za-z\-\[\]\' ]+?)(?: using|,|\.|\n)", re.IGNORECASE),
    re.compile(r"\bin ([A-Za-z\-\[\]\' ]+?) town near the ([A-Za-z\-\[\]\' ]+?)(?: with| using|,|\.|\n)", re.IGNORECASE),
    re.compile(r"\bthe ([A-Za-z\-\[\]\' ]+?) base southeast of ([A-Za-z\-\[\]\' ]+?)(?: city| with|,|\.|\n)", re.IGNORECASE),
]

def clean_text(text: str) -> str:
    text = text or ""
    text = text.replace("****", "")
    text = text.replace("**", "")
    text = re.sub(r"\s+", " ", text).strip()
    return text

def classify_post(text: str, has_media: bool) -> str:
    if not text and has_media:
        return "media_only"
    lowered = text.lower()
    if "video |" in lowered or lowered.startswith("⭕video") or "footage shows" in lowered:
        return "video_report"
    if "statement issued by" in lowered:
        return "formal_statement"
    return "other"

def extract_statement_number(text: str):
    m = STATEMENT_RE.search(text)
    return int(m.group(1)) if m else None

def extract_time(text: str):
    m = TIME_RE.search(text)
    return m.group(1).upper().replace(" ", "") if m else None

def extract_location(text: str):
    for pattern in LOCATION_PATTERNS:
        m = pattern.search(text)
        if not m:
            continue
        parts = [p.strip() for p in m.groups() if p and p.strip()]
        if parts:
            return " / ".join(parts)
    return None

def detect_weapon(text: str):
    lowered = text.lower()
    if "guided missile" in lowered:
        return "guided_missile"
    if "swarm of loitering drones" in lowered or "loitering drones" in lowered:
        return "loitering_drones"
    if "rocket barrage" in lowered and "artillery shells" in lowered:
        return "rocket_barrage_and_artillery"
    if "light and medium weapons" in lowered:
        return "light_and_medium_weapons"
    if "rocket barrage" in lowered:
        return "rocket_barrage"
    if "artillery shells" in lowered:
        return "artillery_shells"
    return None

def detect_target(text: str):
    lowered = text.lower()
    if "merkava tank" in lowered:
        return "merkava_tank"
    if "enemy force" in lowered:
        return "enemy_force"
    if "artillery bunker" in lowered:
        return "artillery_bunker"
    if "base" in lowered:
        return "base"
    return None

def detect_event_type(text: str):
    lowered = text.lower()
    if "engaged" in lowered:
        return "engagement"
    if "swarm of loitering drones" in lowered or "loitering drones" in lowered:
        return "drone_attack"
    if "guided missile" in lowered and "merkava tank" in lowered:
        return "anti_armor_strike"
    if "rocket barrage" in lowered or "artillery shells" in lowered:
        return "indirect_fire_strike"
    if "targeted" in lowered:
        return "strike"
    return "unknown"

def extract_hashtags(text: str):
    return HASHTAG_RE.findall(text or "")

def fingerprint(text: str):
    t = (text or "").lower()
    t = t.replace("low quality video", "")
    t = re.sub(r"statement issued by .*?\(\d+\):", "", t)
    t = re.sub(r"#\w+", "", t)
    t = re.sub(r"\s+", " ", t).strip()
    return t

def score_confidence(post_kind: str, location, weapon, target, statement_number):
    score = 0.20
    if post_kind == "formal_statement":
        score = 0.72
    elif post_kind == "video_report":
        score = 0.55
    elif post_kind == "media_only":
        score = 0.10

    if location:
        score += 0.08
    if weapon:
        score += 0.05
    if target:
        score += 0.05
    if statement_number is not None:
        score += 0.05

    return round(min(score, 0.95), 2)

def parse_record(raw):
    text = clean_text(raw.get("text", ""))
    has_media = bool(raw.get("has_media"))
    post_kind = classify_post(text, has_media)
    statement_number = extract_statement_number(text)
    location = extract_location(text)
    weapon = detect_weapon(text)
    target = detect_target(text)
    event_type = detect_event_type(text)
    reported_time = extract_time(text)
    hashtags = extract_hashtags(text)

    candidate = {
        "source": raw.get("source"),
        "message_id": raw.get("message_id"),
        "date_utc": raw.get("date_utc"),
        "post_kind": post_kind,
        "statement_number": statement_number,
        "event_type": event_type,
        "weapon": weapon,
        "target": target,
        "location": location,
        "reported_time_local_text": reported_time,
        "hashtags": hashtags,
        "has_media": has_media,
        "views": raw.get("views"),
        "forwards": raw.get("forwards"),
        "fingerprint": fingerprint(text),
        "confidence": score_confidence(post_kind, location, weapon, target, statement_number),
        "raw_text": text,
    }
    return candidate

def main():
    if not INPUT_FILE.exists():
        raise FileNotFoundError(f"{INPUT_FILE} not found")

    candidates = []

    with INPUT_FILE.open("r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            raw = json.loads(line)
            candidates.append(parse_record(raw))

    with OUTPUT_FILE.open("w", encoding="utf-8") as f:
        json.dump(candidates, f, ensure_ascii=False, indent=2)

    print(f"Wrote {len(candidates)} candidates to {OUTPUT_FILE}")

if __name__ == "__main__":
    main()