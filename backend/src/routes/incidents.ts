import { Router } from "express";
import { z } from "zod";
import { prisma } from "../lib/prisma.js";
import { requireAuth } from "../middleware/auth.js";

const router = Router();

const schema = z.object({
  weeklySummaryId: z.number().int().positive(),
  titleEn: z.string().min(1),
  titleAr: z.string().min(1),
  descriptionEn: z.string().optional().nullable(),
  descriptionAr: z.string().optional().nullable(),
  recordDate: z.coerce.date(),
  count: z.number().int().nonnegative(),
  category: z.string().min(1),
  locationNameEn: z.string().optional().nullable(),
  locationNameAr: z.string().optional().nullable(),
  latitude: z.number().optional().nullable(),
  longitude: z.number().optional().nullable(),
  sourceId: z.number().int().optional().nullable()
});

router.get("/summary/:weeklySummaryId", async (req, res) => {
  const weeklySummaryId = Number(req.params.weeklySummaryId);
  const rows = await prisma.incidentRecord.findMany({
    where: { weeklySummaryId },
    include: { source: true },
    orderBy: { recordDate: "desc" }
  });
  res.json(rows);
});

router.post("/", requireAuth, async (req, res) => {
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ message: "Invalid payload", errors: parsed.error.flatten() });
    return;
  }

  const incident = await prisma.incidentRecord.create({ data: parsed.data });
  res.status(201).json(incident);
});

router.put("/:id", requireAuth, async (req, res) => {
  const id = Number(req.params.id);
  const parsed = schema.partial().safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ message: "Invalid payload", errors: parsed.error.flatten() });
    return;
  }

  const incident = await prisma.incidentRecord.update({ where: { id }, data: parsed.data });
  res.json(incident);
});

router.delete("/:id", requireAuth, async (req, res) => {
  const id = Number(req.params.id);
  await prisma.incidentRecord.delete({ where: { id } });
  res.status(204).send();
});

export default router;
