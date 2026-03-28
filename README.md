---

## Overview

Eye of War is a real-time conflict intelligence platform that ingests, processes, and visualizes front-line reports from Telegram sources into structured operational insights.

The system transforms raw, unstructured field reports into:
- Live intelligence feed
- Structured incident candidates
- Operational analytics dashboards
- Admin-controlled datasets

This project is currently in an early but functional stage, with a working ingestion pipeline and live dashboard integration.

---

## Architecture

The system is composed of three main layers:

### 1. Data Ingestion (Telegram Collector)
- Built with Python and Telethon
- Connects to public Telegram channels/groups
- Performs:
  - Historical backfill
  - Live message listening
- Outputs raw data into:
  - `telegram_feed.jsonl`

---

### 2. Processing Layer (Parser)
- Parses raw Telegram messages into structured candidates
- Extracts:
  - Event type
  - Weapon type
  - Target
  - Location
  - Time
  - Statement number
  - Confidence score
- Outputs:
  - `incident_candidates.json`

---

### 3. Application Layer (Dashboard)

#### Backend
- Node.js + Express + TypeScript
- Prisma ORM with SQLite
- REST API

Key endpoints:
- `/api/weekly-summaries`
- `/api/stat-blocks`
- `/api/incidents`
- `/api/sources`
- `/api/telegram-feed` (custom live feed)

#### Frontend
- React + Vite + TypeScript
- Tailwind CSS
- Recharts for analytics

---

## Key Features Implemented

### Live Telegram Feed
- Reads directly from `telegram_feed.jsonl`
- Displays latest messages
- Auto-refresh every 10 seconds
- Shows:
  - Source
  - Timestamp
  - Post type
  - Extracted metadata (event, weapon, location)

---

### Telegram Collector
- Uses Telethon (Telegram API)
- Supports:
  - Public channel monitoring
  - Historical backfill
  - Live streaming updates
- Stores structured JSON lines

---

### Parsing Engine (v1)
- Rule-based extraction
- Detects:
  - Formal statements
  - Video reports
  - Media-only posts
- Generates:
  - Event classification
  - Weapon detection
  - Target identification
  - Location extraction
  - Confidence scoring

---

### Admin Panel
- Unified data editor
- Edit:
  - Total operations
  - Regional breakdown
  - Weapon usage
- JWT authentication

---

### Analytics Dashboard
- Operations trend charts
- Category breakdowns
- Weapon distribution
- Weekly summaries

---

## Project Structure

AynAlHarb/ │ ├── backend/ │   ├── src/ │   │   ├── routes/ │   │   ├── prisma/ │   │   └── app.ts │ ├── frontend/ │   ├── src/ │   │   ├── components/ │   │   ├── pages/ │   │   ├── lib/ │   │   └── types.ts │ ├── telegram_collector.py ├── parse_candidates.py ├── telegram_feed.jsonl ├── incident_candidates.json └── run-all.bat

---

## Setup Instructions

### 1. Install dependencies

Backend:

cd backend npm install

Frontend:

cd frontend npm install

Python:

pip install telethon

---

### 2. Configure environment

Create `.env` in root:

TELEGRAM_FEED_PATH="C:/Users/Charlie/AynAlHarb/telegram_feed.jsonl"

---

### 3. Run everything

Using batch script:

run-all.bat

Or manually:

python telegram_collector.py npm run dev:backend npm run dev:frontend

---

## Data Flow

Telegram Channels ↓ Telethon Collector ↓ telegram_feed.jsonl ↓ Parser (parse_candidates.py) ↓ incident_candidates.json ↓ Backend API ↓ Frontend Dashboard (Live Feed + Analytics)

---

## Current Limitations

- No deduplication of similar posts yet
- Location extraction is partial in some cases
- Media-only posts are not linked to text posts
- Data is file-based, not database-driven yet
- No moderation/review workflow implemented yet
- No real-time websocket system (polling used instead)

---

## Next Steps (Planned)

- Deduplication engine for repeated posts
- Review queue for validating incidents
- Database integration for Telegram messages
- Map-based visualization of incidents
- Improved NLP parsing for Arabic and English
- UI/UX redesign into command center layout
- Source credibility and confidence tracking

---

## Security Notes

- Do not expose your Telegram `api_hash`
- Do not commit `.session` files
- Add to `.gitignore`:

*.session *.session-journal telegram_feed.jsonl incident_candidates.json .env

---

## License

Private project. Not licensed for public reuse at this stage.

---
