import fs from "node:fs";
import path from "node:path";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import { PrismaClient, SummaryStatus } from "../backend/src/generated/prisma/index.js";

const envCandidates = [path.resolve(process.cwd(), ".env"), path.resolve(process.cwd(), "../.env")];
for (const envPath of envCandidates) {
  if (fs.existsSync(envPath)) {
    dotenv.config({ path: envPath });
    break;
  }
}

const prisma = new PrismaClient();

async function main(): Promise<void> {
  const adminEmail = process.env.ADMIN_EMAIL || "admin@aynalharb.local";
  const adminPassword = process.env.ADMIN_PASSWORD || "Admin123!";

  await prisma.incidentRecord.deleteMany();
  await prisma.summaryStatBlock.deleteMany();
  await prisma.weeklySummary.deleteMany();
  await prisma.source.deleteMany();

  const passwordHash = await bcrypt.hash(adminPassword, 10);

  await prisma.adminUser.upsert({
    where: { email: adminEmail },
    update: { passwordHash },
    create: { email: adminEmail, passwordHash }
  });

  const sourceA = await prisma.source.create({
    data: {
      name: "Regional Monitoring Network",
      url: "https://example.org/report-brief",
      note: "Open-source field observations"
    }
  });

  const sourceB = await prisma.source.create({
    data: {
      name: "Satellite Imagery Bulletin",
      url: "https://example.org/imagery-weekly",
      note: "Imagery interpretation, weekly digest"
    }
  });

  const weekly = await prisma.weeklySummary.create({
    data: {
      titleEn: "Ayn Al Harb Weekly Monitoring Brief",
      titleAr: "إحاطة عين الحرب الأسبوعية للرصد",
      subtitleEn: "Neutral incident tracking for the current reporting window",
      subtitleAr: "تتبع محايد للحوادث ضمن نافذة التقرير الحالية",
      weekStart: new Date("2026-03-16"),
      weekEnd: new Date("2026-03-22"),
      totalIncidents: 68,
      dailyAverage: 9.7,
      maxRangeKm: 72,
      notesEn: "Data reflects verified records only. Values may be revised after source validation.",
      notesAr: "تعكس البيانات السجلات التي تم التحقق منها فقط. قد تتم مراجعة القيم بعد التحقق من المصادر.",
      status: SummaryStatus.PUBLISHED,
      coverImageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa"
    }
  });

  const statRows = [
    ["Military Bases", "قواعد عسكرية", 7, "landmark", 1, "Infrastructure"],
    ["Vehicles", "آليات", 15, "truck", 2, "Mobility"],
    ["Drones", "طائرات مسيرة", 9, "drone", 3, "Aerial"],
    ["Fortified Sites", "مواقع محصنة", 5, "shield", 4, "Infrastructure"],
    ["Border Sites", "مواقع حدودية", 8, "map-pin", 5, "Geography"],
    ["Infrastructure", "بنى تحتية", 6, "factory", 6, "Infrastructure"],
    ["Artillery", "مدفعية", 4, "target", 7, "Equipment"],
    ["Air Defense", "دفاع جوي", 3, "radar", 8, "Equipment"],
    ["Technical Equipment", "تجهيزات فنية", 6, "cpu", 9, "Equipment"],
    ["Command Centers", "مراكز قيادية", 2, "building", 10, "Command"],
    ["Observation Posts", "نقاط مراقبة", 5, "eye", 11, "Command"],
    ["Supply Nodes", "عقد إمداد", 4, "package", 12, "Logistics"]
  ] as const;

  for (const [labelEn, labelAr, value, icon, displayOrder, groupName] of statRows) {
    await prisma.summaryStatBlock.create({
      data: {
        weeklySummaryId: weekly.id,
        labelEn,
        labelAr,
        value,
        icon,
        displayOrder,
        groupName
      }
    });
  }

  const incidents = [
    ["Border route activity", "نشاط على طريق حدودي", "Mobility", "North Ridge", "التلال الشمالية", 2, "2026-03-16", sourceA.id, 34.81, 36.62],
    ["Infrastructure disruption", "تعطل في بنية تحتية", "Infrastructure", "Central Grid", "الشبكة المركزية", 1, "2026-03-16", sourceB.id, 34.7, 36.5],
    ["Aerial observation logged", "تسجيل مراقبة جوية", "Aerial", "East Corridor", "الممر الشرقي", 3, "2026-03-17", sourceA.id, 34.76, 36.68],
    ["Equipment movement", "تحرك تجهيزات", "Equipment", "Delta Sector", "قطاع دلتا", 1, "2026-03-18", sourceA.id, 34.82, 36.7],
    ["Perimeter incident", "حادثة على المحيط", "Security", "Foxtrot Line", "خط فوكستروت", 2, "2026-03-18", sourceB.id, 34.77, 36.59],
    ["Command node report", "بلاغ عن عقدة قيادة", "Command", "Urban South", "الجنوب الحضري", 1, "2026-03-19", sourceA.id, 34.72, 36.66],
    ["Logistics convoy sighting", "رصد قافلة إمداد", "Logistics", "West Route", "المسار الغربي", 4, "2026-03-20", sourceB.id, 34.75, 36.61],
    ["Checkpoint record", "تسجيل نقطة تفتيش", "Security", "Southern Gate", "البوابة الجنوبية", 2, "2026-03-21", sourceA.id, 34.68, 36.63],
    ["Communication relay issue", "مشكلة في نقطة اتصالات", "Infrastructure", "Relay Hill", "تل المحطة", 1, "2026-03-22", sourceB.id, 34.83, 36.65]
  ] as const;

  for (const [titleEn, titleAr, category, locationNameEn, locationNameAr, count, recordDate, sourceId, latitude, longitude] of incidents) {
    await prisma.incidentRecord.create({
      data: {
        weeklySummaryId: weekly.id,
        titleEn,
        titleAr,
        descriptionEn: "Recorded via cross-referenced weekly monitoring logs.",
        descriptionAr: "تم التسجيل عبر سجلات رصد أسبوعية تمت مطابقتها.",
        recordDate: new Date(recordDate),
        count,
        category,
        locationNameEn,
        locationNameAr,
        sourceId,
        latitude,
        longitude
      }
    });
  }

  console.log("Seed completed successfully.");
  console.log(`Admin login: ${adminEmail} / ${adminPassword}`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
