# Ayn Al Harb | عين الحرب

Neutral bilingual monitoring dashboard for weekly conflict-related incident statistics.

This platform is designed as a newsroom-style analytics and record-keeping system. It focuses on transparent, data-driven reporting and does not promote propaganda or glorification.

## Tech Stack

- Frontend: React + Vite + Tailwind CSS + Recharts
- Backend: Node.js + Express (TypeScript)
- Database: SQLite + Prisma ORM
- Auth: JWT-based admin authentication
- Optional map-ready support: incidents include latitude/longitude fields for map integration

## Project Structure

- `frontend/` React public and admin dashboards
- `backend/` Express API, auth, and business routes
- `prisma/` Prisma schema, migrations, and seed data
- `shared/` Shared TypeScript DTO types
- `.env.example` Environment template

## Features

### Public Website

- Home/Dashboard page
- Weekly Summary page (`/weekly/:id`)
- Archive page
- Analytics page
- About/Methodology page
- KPI cards and weekly hero card
- Large bilingual stat block section:
  - English: Items Recorded This Week
  - Arabic: العناصر المسجلة هذا الأسبوع
- Bar, pie, and line charts
- Archive summaries and incident table
- Responsive desktop/mobile layout
- English/Arabic language toggle with RTL/LTR switching

### Admin Dashboard

- Secure login page (`/admin/login`)
- Overview dashboard
- Weekly summaries management
- Category/stat block management
- Incident records management
- Source/reference management
- Create/edit/delete controls
- Publish/unpublish controls
- Form validation
- Toast notifications
- Delete confirmation modal

## Data Models (Prisma)

Implemented in `prisma/schema.prisma`:

- `AdminUser`
- `WeeklySummary`
- `SummaryStatBlock`
- `IncidentRecord`
- `Source`

## API Endpoints

Base: `/api`

- Auth:
  - `POST /auth/login`

- Weekly summaries:
  - `GET /weekly-summaries`
  - `GET /weekly-summaries/:id`
  - `POST /weekly-summaries` (auth)
  - `PUT /weekly-summaries/:id` (auth)
  - `DELETE /weekly-summaries/:id` (auth)

- Stat blocks:
  - `GET /stat-blocks/summary/:weeklySummaryId`
  - `POST /stat-blocks` (auth)
  - `PUT /stat-blocks/:id` (auth)
  - `DELETE /stat-blocks/:id` (auth)

- Incidents:
  - `GET /incidents/summary/:weeklySummaryId`
  - `POST /incidents` (auth)
  - `PUT /incidents/:id` (auth)
  - `DELETE /incidents/:id` (auth)

- Sources:
  - `GET /sources`
  - `POST /sources` (auth)
  - `PUT /sources/:id` (auth)
  - `DELETE /sources/:id` (auth)

## Setup Instructions

1. Install dependencies:

```bash
npm install
```

2. Create environment file from template:

```bash
cp .env.example .env
```

Windows PowerShell alternative:

```powershell
Copy-Item .env.example .env
```

3. Run Prisma migration and seed:

```bash
npm run prisma:migrate -- --name init
npm run prisma:seed
```

4. Start backend and frontend (two terminals):

```bash
npm run dev:backend
npm run dev:frontend
```

5. Open the frontend:

- `http://localhost:5173`

API runs on:

- `http://localhost:4000`

## Default Admin Credentials (Seed)

- Email: `admin@aynalharb.local`
- Password: `Admin123!`

You can change these in `.env` before seeding.

## Seed Data Included

- 1 sample weekly summary
- 12 bilingual stat block rows
- 9 incident records
- 2 sources
- 1 admin user

All values are editable from admin pages.

## How to edit weekly numbers

1. Login at `/admin/login`.
2. Go to Admin -> Weekly Summaries.
3. Use `Edit Totals` on a summary card to update:
   - total incidents
   - daily average
   - max range
4. Save and refresh public pages to see updated KPI and hero metrics.

## How to add a new bilingual stat row

1. Login to admin.
2. Open Admin -> Stat Blocks.
3. Select the target weekly summary.
4. Fill the form fields:
   - English label
   - Arabic label
   - count value
   - optional icon
   - display order
   - optional group/category
5. Click `Add Stat Row`.

The row appears in the big public section:
- Items Recorded This Week
- العناصر المسجلة هذا الأسبوع

## How to publish a weekly summary

1. Login to admin.
2. Go to Admin -> Weekly Summaries.
3. On the selected summary, click `Publish`.
4. To hide it later, click `Unpublish`.

Published summaries are shown on public pages by default.

## Notes

- The frontend currently renders map-ready coordinates in weekly view. If you want an interactive map layer, you can integrate Leaflet easily using the incident latitude/longitude data.
- Build command:

```bash
npm run build
```
