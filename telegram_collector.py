import asyncio
import json
from datetime import datetime, timezone
from telethon import TelegramClient, events

api_id = 36823269
api_hash = "c9bb3ecc2644eb2cbe87ba62f644302c"

# Put your public channels/groups here
TARGETS = [
    "mmirleb",
    "mmirlb",
]

OUTPUT_FILE = "telegram_feed.jsonl"

def save_record(record):
    with open(OUTPUT_FILE, "a", encoding="utf-8") as f:
        f.write(json.dumps(record, ensure_ascii=False) + "\n")

async def backfill_target(client, target, limit=100):
    messages = await client.get_messages(target, limit=limit)

    for msg in reversed(messages):
        text = (msg.text or "").strip()

        record = {
            "source": target,
            "message_id": msg.id,
            "date_utc": msg.date.isoformat() if msg.date else None,
            "text": text,
            "sender_id": msg.sender_id,
            "views": getattr(msg, "views", None),
            "forwards": getattr(msg, "forwards", None),
            "has_media": msg.media is not None,
            "collected_at_utc": datetime.now(timezone.utc).isoformat(),
            "mode": "backfill"
        }

        save_record(record)

async def main():
    client = TelegramClient("eye_of_war", api_id, api_hash)

    @client.on(events.NewMessage(chats=TARGETS))
    async def handler(event):
        msg = event.message
        text = (msg.text or "").strip()

        record = {
            "source": getattr(event.chat, "username", None) or getattr(event.chat, "title", None) or str(event.chat_id),
            "chat_id": event.chat_id,
            "message_id": msg.id,
            "date_utc": msg.date.isoformat() if msg.date else None,
            "text": text,
            "sender_id": msg.sender_id,
            "views": getattr(msg, "views", None),
            "forwards": getattr(msg, "forwards", None),
            "has_media": msg.media is not None,
            "collected_at_utc": datetime.now(timezone.utc).isoformat(),
            "mode": "live"
        }

        print("=" * 80)
        print(record["source"])
        print(record["date_utc"])
        print((record["text"] or "[NO TEXT]")[:300])

        save_record(record)

    await client.start()

    for target in TARGETS:
        print(f"Backfilling {target} ...")
        await backfill_target(client, target, limit=100)

    print("Backfill complete. Listening for live updates...")
    await client.run_until_disconnected()

asyncio.run(main())