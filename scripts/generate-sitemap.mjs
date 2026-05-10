import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const baseUrl = 'https://naturegreenpune.in';
const today = new Date().toISOString().slice(0, 10);

const pages = [
  { path: '/', priority: '1.0' },
  { path: '/about', priority: '0.8' },
  { path: '/highlights', priority: '0.8' },
  { path: '/gallery', priority: '0.8' },
  { path: '/floor-plans', priority: '0.9' },
  { path: '/amenities', priority: '0.8' },
  { path: '/location', priority: '0.8' },
  { path: '/contact', priority: '0.7' }
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const destinations = [
  join(root, 'public', 'sitemap.xml'),
  join(root, 'src', 'assets', 'sitemap.xml')
];

for (const destination of destinations) {
  mkdirSync(dirname(destination), { recursive: true });
  writeFileSync(destination, sitemap);
}

console.log(`Generated sitemap.xml with ${pages.length} URLs.`);
