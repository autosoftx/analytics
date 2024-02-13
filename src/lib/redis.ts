import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: "https://eu2-alert-magpie-31967.upstash.io",
  token: process.env.DATABASE_KEY!,
});
