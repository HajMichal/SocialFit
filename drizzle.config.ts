import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./apps/server/db/migration",
  schema: "./apps/server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});