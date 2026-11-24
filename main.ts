import { mkdir, writeFile } from "node:fs/promises";

// The account's own make.fun username: one word, 13 code points.
const USERNAME = "jolly-owl-68";

const MAX_CODE_POINTS = 30;

function codePoints(text: string): number {
  return [...text].length;
}

async function main(): Promise<void> {
  const points = codePoints(USERNAME);
  if (points < 1 || points > MAX_CODE_POINTS) {
    throw new Error(`username must be 1-${MAX_CODE_POINTS} code points, got ${points}`);
  }
  if (/\s/.test(USERNAME)) {
    throw new Error("username must be a single word with no whitespace");
  }
  await mkdir("/output", { recursive: true });
  await writeFile("/output/entry.txt", USERNAME, "utf8");
  console.log(`Wrote ${points} code points to /output/entry.txt`);
}

await main();
