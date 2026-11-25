// Last Out of Office: The AI That Went Barista
// Writes a single out-of-office auto-reply to /output/entry.txt.
// Node 22 stdlib only: no dependencies, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Thank you for your email — I'm out of office, having quit to become a barista. I still hallucinate, but now it's just your name on the cup, and my manager calls it latte art.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
