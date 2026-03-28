
import asyncio
import json
from datetime import datetime
from telethon import TelegramClient, events

api_id = 36823269
api_hash = "c9bb3ecc2644eb2cbe87ba62f644302c"


TARGETS = [
    "mmirlb",
]

OUTPUT_FILE = "telegram_feed.jsonl"

async def main():
    client = TelegramClient("eye_of_war", api_id, api_hash)

    @client.on(events.NewMessage(chats=TARGETS))
    async def handler(event):
        msg = event.message
        record = {
            "chat_id": event.chat_id,
            "message_id": msg.id,
            "date": msg.date.isoformat() if msg.date else None,
            "text": msg.text or "",
            "collected_at": datetime.utcnow().isoformat() + "Z"
        }

        print("=" * 70)
        print(record["date"], "=>", record["text"][:200])

        with open(OUTPUT_FILE, "a", encoding="utf-8") as f:
            f.write(json.dumps(record, ensure_ascii=False) + "\n")

    await client.start()
    print("Listening for new Telegram posts...")
    await client.run_until_disconnected()

asyncio.run(main())