import { Router } from "express";
import { z } from "zod";
import { prisma } from "../lib/prisma.js";
import { requireAuth } from "../middleware/auth.js";

const router = Router();

const schema = z.object({
  name: z.string().min(1),
  url: z.string().url().optional().nullable(),
  note: z.string().optional().nullable()
});

router.get("/", async (_req, res) => {
  const sources = await prisma.source.findMany({
    orderBy: { createdAt: "desc" }
  });
  res.json(sources);
});

router.post("/", requireAuth, async (req, res) => {
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ message: "Invalid payload", errors: parsed.error.flatten() });
    return;
  }

  const source = await prisma.source.create({ data: parsed.data });
  res.status(201).json(source);
});

router.put("/:id", requireAuth, async (req, res) => {
  const id = Number(req.params.id);
  const parsed = schema.partial().safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ message: "Invalid payload", errors: parsed.error.flatten() });
    return;
  }

  const source = await prisma.source.update({ where: { id }, data: parsed.data });
  res.json(source);
});

router.delete("/:id", requireAuth, async (req, res) => {
  const id = Number(req.params.id);
  await prisma.source.delete({ where: { id } });
  res.status(204).send();
});

export default router;
