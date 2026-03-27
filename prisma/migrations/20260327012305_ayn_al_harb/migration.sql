-- CreateTable
CREATE TABLE "AdminUser" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "WeeklySummary" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titleEn" TEXT NOT NULL,
    "titleAr" TEXT NOT NULL,
    "subtitleEn" TEXT,
    "subtitleAr" TEXT,
    "weekStart" DATETIME NOT NULL,
    "weekEnd" DATETIME NOT NULL,
    "totalIncidents" INTEGER NOT NULL,
    "dailyAverage" REAL NOT NULL,
    "maxRangeKm" REAL,
    "notesEn" TEXT,
    "notesAr" TEXT,
    "coverImageUrl" TEXT,
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "SummaryStatBlock" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "weeklySummaryId" INTEGER NOT NULL,
    "labelEn" TEXT NOT NULL,
    "labelAr" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "icon" TEXT,
    "displayOrder" INTEGER NOT NULL DEFAULT 0,
    "groupName" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "SummaryStatBlock_weeklySummaryId_fkey" FOREIGN KEY ("weeklySummaryId") REFERENCES "WeeklySummary" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "IncidentRecord" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "weeklySummaryId" INTEGER NOT NULL,
    "titleEn" TEXT NOT NULL,
    "titleAr" TEXT NOT NULL,
    "descriptionEn" TEXT,
    "descriptionAr" TEXT,
    "recordDate" DATETIME NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 1,
    "category" TEXT NOT NULL,
    "locationNameEn" TEXT,
    "locationNameAr" TEXT,
    "latitude" REAL,
    "longitude" REAL,
    "sourceId" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "IncidentRecord_weeklySummaryId_fkey" FOREIGN KEY ("weeklySummaryId") REFERENCES "WeeklySummary" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "IncidentRecord_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Source" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "url" TEXT,
    "note" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "AdminUser_email_key" ON "AdminUser"("email");

-- CreateIndex
CREATE INDEX "SummaryStatBlock_weeklySummaryId_displayOrder_idx" ON "SummaryStatBlock"("weeklySummaryId", "displayOrder");

-- CreateIndex
CREATE INDEX "IncidentRecord_weeklySummaryId_category_idx" ON "IncidentRecord"("weeklySummaryId", "category");

-- CreateIndex
CREATE INDEX "IncidentRecord_sourceId_idx" ON "IncidentRecord"("sourceId");
