# Nature Green - Avani Construction

Premium static showcase website for **Nature Green**, a completed 2BHK residential apartment project by **Avani Construction** at Bavdhan, Pune.

## Tech Stack

- Angular 21
- Standalone components
- TypeScript
- Plain CSS
- Lucide Angular icons
- Static frontend only

## Folder Structure

```text
src/
  app/
    core/
      data/site-content.ts        # Editable site copy, links, image paths, cards
      services/theme.service.ts   # Dark/light mode
    layout/
      navbar/
      footer/
    pages/
      home/
        sections/
          hero/
          about/
          highlights/
          gallery/
          floor-plan/
          amenities/
          specifications/
          nearby/
          map/
          previous-projects/
          brochure/
          contact/
    shared/
      components/
        image-preview-dialog/
        section-heading/
      directives/
        reveal.directive.ts
public/
  assets/
    documents/nature-green-brochure.pdf
    images/
```

## Installation

```bash
npm install
npm start
```

Open:

```text
http://localhost:4200
```

## Production Build

```bash
npm run build
```

Build output:

```text
dist/nature-green
```

## Required Packages

Runtime:

- `@angular/core`
- `@angular/common`
- `@angular/forms`
- `@angular/router`
- `@angular/platform-browser`
- `lucide-angular`
- `rxjs`

Build:

- `@angular/cli`
- `@angular/build`
- `@angular/compiler-cli`
- `typescript`

## Content Editing

Most editable website content is centralized here:

```text
src/app/core/data/site-content.ts
```

Replace project text, contact details, map embed URL, brochure path, floor plan image, gallery images, nearby locations, specifications, and previous projects from this file.

## SEO Recommendations

- Replace dummy phone, email, and map coordinates before publishing.
- Add real project images with descriptive alt text.
- Add canonical URL after the final domain is known.
- Add verified business address and contact schema.
- Keep the project name, location, and flat type in page title and meta description.

## Image Optimization Recommendations

- Use WebP or AVIF for gallery and hero images.
- Keep hero image around 1800-2200px wide, compressed carefully.
- Keep gallery images around 1000-1400px wide.
- Use descriptive filenames such as `nature-green-facade.webp`.
- Replace placeholder visuals in `public/assets/images` and update paths in `site-content.ts`.
- Keep the brochure PDF compressed before upload.
