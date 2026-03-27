import { Router } from "express";
import { z } from "zod";
import { prisma } from "../lib/prisma.js";
import { requireAuth } from "../middleware/auth.js";

const router = Router();

const summarySchema = z.object({
  titleEn: z.string().min(1),
  titleAr: z.string().min(1),
  subtitleEn: z.string().optional().nullable(),
  subtitleAr: z.string().optional().nullable(),
  weekStart: z.coerce.date(),
  weekEnd: z.coerce.date(),
  totalIncidents: z.number().int().nonnegative(),
  dailyAverage: z.number().nonnegative(),
  maxRangeKm: z.number().nonnegative().optional().nullable(),
  notesEn: z.string().optional().nullable(),
  notesAr: z.string().optional().nullable(),
  coverImageUrl: z.string().url().optional().nullable(),
  status: z.enum(["DRAFT", "PUBLISHED"]).default("DRAFT")
});

router.get("/", async (req, res) => {
  const includeDraft = req.query.includeDraft === "true";
  const where = includeDraft ? {} : { status: "PUBLISHED" as const };

  const summaries = await prisma.weeklySummary.findMany({
    where,
    include: {
      statBlocks: {
        orderBy: {
          displayOrder: "asc"
        }
      }
    },
    orderBy: {
      weekStart: "desc"
    }
  });

  res.json(summaries);
});

router.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const summary = await prisma.weeklySummary.findUnique({
    where: { id },
    include: {
      statBlocks: { orderBy: { displayOrder: "asc" } },
      incidents: {
        include: { source: true },
        orderBy: { recordDate: "desc" }
      }
    }
  });

  if (!summary) {
    res.status(404).json({ message: "Summary not found" });
    return;
  }

  res.json(summary);
});

router.post("/", requireAuth, async (req, res) => {
  const parsed = summarySchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ message: "Invalid payload", errors: parsed.error.flatten() });
    return;
  }

  const summary = await prisma.weeklySummary.create({ data: parsed.data });
  res.status(201).json(summary);
});

router.put("/:id", requireAuth, async (req, res) => {
  const id = Number(req.params.id);
  const parsed = summarySchema.partial().safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({ message: "Invalid payload", errors: parsed.error.flatten() });
    return;
  }

  const summary = await prisma.weeklySummary.update({
    where: { id },
    data: parsed.data
  });

  res.json(summary);
});

router.delete("/:id", requireAuth, async (req, res) => {
  const id = Number(req.params.id);
  await prisma.weeklySummary.delete({ where: { id } });
  res.status(204).send();
});

export default router;
