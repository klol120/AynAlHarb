import { Router } from "express";
import { z } from "zod";
import { prisma } from "../lib/prisma.js";
import { requireAuth } from "../middleware/auth.js";

const router = Router();

const schema = z.object({
  weeklySummaryId: z.number().int().positive(),
  labelEn: z.string().min(1),
  labelAr: z.string().min(1),
  value: z.number().int().nonnegative(),
  icon: z.string().optional().nullable(),
  displayOrder: z.number().int().optional().default(0),
  groupName: z.string().optional().nullable()
});

router.get("/summary/:weeklySummaryId", async (req, res) => {
  const weeklySummaryId = Number(req.params.weeklySummaryId);
  const rows = await prisma.summaryStatBlock.findMany({
    where: { weeklySummaryId },
    orderBy: { displayOrder: "asc" }
  });
  res.json(rows);
});

router.post("/", requireAuth, async (req, res) => {
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ message: "Invalid payload", errors: parsed.error.flatten() });
    return;
  }

  const row = await prisma.summaryStatBlock.create({ data: parsed.data });
  res.status(201).json(row);
});

router.put("/:id", requireAuth, async (req, res) => {
  const id = Number(req.params.id);
  const parsed = schema.partial().safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ message: "Invalid payload", errors: parsed.error.flatten() });
    return;
  }

  const row = await prisma.summaryStatBlock.update({ where: { id }, data: parsed.data });
  res.json(row);
});

router.delete("/:id", requireAuth, async (req, res) => {
  const id = Number(req.params.id);
  await prisma.summaryStatBlock.delete({ where: { id } });
  res.status(204).send();
});

export default router;
