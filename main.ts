import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "WARNING: Human inside. No off switch, no warranty, no manual. May argue, nap, or eat your snacks without warning.";

// Gate: UTF-8, 1-160 chars, single line, not only whitespace.
if (
  line.length < 1 ||
  line.length > 160 ||
  line.trim().length === 0 ||
  line.includes("\n") ||
  line.includes("\r")
) {
  throw new Error("entry must be a single non-empty line of 1-160 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
