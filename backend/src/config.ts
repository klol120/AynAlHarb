import fs from "node:fs";
import path from "node:path";
import dotenv from "dotenv";

const rootEnv = path.resolve(process.cwd(), "../.env");

if (fs.existsSync(rootEnv)) {
  dotenv.config({ path: rootEnv });
} else {
  dotenv.config();
}

const required = ["DATABASE_URL", "JWT_SECRET"] as const;

for (const key of required) {
  if (!process.env[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
}

export const config = {
  port: Number(process.env.PORT || 4000),
  jwtSecret: process.env.JWT_SECRET as string,
  adminEmail: process.env.ADMIN_EMAIL || "admin@aynalharb.local",
  adminPassword: process.env.ADMIN_PASSWORD || "Admin123!"
};
