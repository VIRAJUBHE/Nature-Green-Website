import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const imageDir = join(root, 'public', 'assets', 'images');

const images = [
  'Fascade-View',
  'Floor-Plan',
  'Flat-Plan',
  'New-Residence',
  'Paradise-Inn',
  'Puzzle-Parking',
  'Residence',
  'Sadashiv-Apartment',
  'Samarth-Apartment',
  'Swami-Residency',
  'Top-View',
  'Woodland-Villa'
];

for (const name of images) {
  const source = join(imageDir, `${name}.png`);
  const target = join(imageDir, `${name}.webp`);

  if (!existsSync(source)) {
    continue;
  }

  await sharp(source).webp({ quality: 82 }).toFile(target);
  console.log(`Created ${target}`);
}
