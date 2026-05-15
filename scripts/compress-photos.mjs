import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname } from 'path';

const INPUT_DIR = 'public/assets/photograph';
const MAX_WIDTH = 1800;
const QUALITY = 82;

const files = (await readdir(INPUT_DIR)).filter((f) =>
  ['.jpg', '.jpeg', '.png'].includes(extname(f).toLowerCase())
);

let totalBefore = 0;
let totalAfter = 0;

for (const file of files) {
  const filePath = join(INPUT_DIR, file);
  const { size: before } = await stat(filePath);
  totalBefore += before;

  await sharp(filePath)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toFile(filePath + '.tmp');

  const { size: after } = await stat(filePath + '.tmp');
  totalAfter += after;

  await import('fs').then((fs) => fs.promises.rename(filePath + '.tmp', filePath));

  const saved = (((before - after) / before) * 100).toFixed(1);
  console.log(`${file}: ${(before / 1e6).toFixed(1)}MB → ${(after / 1e6).toFixed(1)}MB (${saved}% smaller)`);
}

console.log(
  `\nTotal: ${(totalBefore / 1e6).toFixed(1)}MB → ${(totalAfter / 1e6).toFixed(1)}MB (${(((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1)}% smaller)`
);
