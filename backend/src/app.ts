import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import summaryRoutes from "./routes/weeklySummaries.js";
import statBlockRoutes from "./routes/statBlocks.js";
import incidentRoutes from "./routes/incidents.js";
import sourceRoutes from "./routes/sources.js";

export const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/auth", authRoutes);
app.use("/api/weekly-summaries", summaryRoutes);
app.use("/api/stat-blocks", statBlockRoutes);
app.use("/api/incidents", incidentRoutes);
app.use("/api/sources", sourceRoutes);

app.use((err: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err);
  res.status(500).json({ message: "Internal server error" });
});
