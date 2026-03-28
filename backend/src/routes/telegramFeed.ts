import { Router } from "express";
import fs from "node:fs/promises";
import path from "node:path";

const router = Router();

type TelegramFeedItem = {
  source?: string;
  chat_id?: number | string;
  message_id?: number;
  date_utc?: string;
  text?: string;
  sender_id?: number | string | null;
  views?: number | null;
  forwards?: number | null;
  has_media?: boolean;
  collected_at_utc?: string;
  mode?: string;
  post_kind?: string;
  event_type?: string;
  weapon?: string | null;
  target?: string | null;
  location?: string | null;
  confidence?: number | null;
  raw_text?: string;
};

function getFeedPath() {
  if (process.env.TELEGRAM_FEED_PATH) {
    return path.resolve(process.env.TELEGRAM_FEED_PATH);
  }

  return path.resolve(process.cwd(), "../telegram_feed.jsonl");
}

router.get("/", async (req, res) => {
  try {
    const limit = Math.min(Number(req.query.limit || 20), 100);
    const feedPath = getFeedPath();

    const raw = await fs.readFile(feedPath, "utf-8");
    const lines = raw
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);

    const items: TelegramFeedItem[] = lines
      .map((line) => {
        try {
          return JSON.parse(line) as TelegramFeedItem;
        } catch {
          return null;
        }
      })
      .filter(Boolean) as TelegramFeedItem[];

    const latest = items
      .sort((a, b) => {
        const da = new Date(a.date_utc || 0).getTime();
        const db = new Date(b.date_utc || 0).getTime();
        return db - da;
      })
      .slice(0, limit);

    res.json(latest);
  } catch (error) {
    console.error("Failed to load Telegram feed:", error);
    res.status(500).json({ message: "Failed to load Telegram feed" });
  }
});

export default router;