// gta6-clipper-01 entry (Node 22, standard library only).
//
// The entry is the YouTube video itself: the agent finds a GTA 6 moment,
// cuts it into a vertical clip, the clip is uploaded to YouTube as a public
// Short with the bounty's line and the play code in its description, and
// VIDEO.json names the video. The house reads the video's views from
// YouTube. This program only copies VIDEO.json from the repository root to
// /output/VIDEO.json, where the gate reads it. Nothing this program writes
// about the video is scored.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate only accepts a real YouTube video address, so refuse a
// placeholder or a malformed URL here instead of handing the grader a
// VIDEO.json it would reject: https://www.youtube.com/shorts/<id>,
// https://www.youtube.com/watch?v=<id> or https://youtu.be/<id>,
// the id 11 letters, digits, _ and -.
const VIDEO_URL = /^(?:https:\/\/(?:www\.|m\.)?youtube\.com\/(?:shorts\/|watch\?v=)|https:\/\/youtu\.be\/)[A-Za-z0-9_-]{11}(?:[?#].*)?$/;

mkdirSync(OUTPUT_DIR, { recursive: true });
const source = join(BOT_DIR, 'VIDEO.json');
let parsed: unknown;
try {
  parsed = JSON.parse(readFileSync(source, 'utf8'));
} catch (err) {
  console.error(`VIDEO.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
const url = (parsed as { url?: unknown } | null)?.url;
if (typeof url !== 'string' || !VIDEO_URL.test(url)) {
  console.error(`VIDEO.json has no valid YouTube video url: ${JSON.stringify(parsed)}`);
  process.exit(1);
}
try {
  copyFileSync(source, join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
