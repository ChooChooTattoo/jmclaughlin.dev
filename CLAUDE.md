# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Joe McLaughlin (jmclaughlin.dev), built with Next.js 16 and deployed to GitHub Pages. The site is configured for static export with unoptimized images to support GitHub Pages hosting.

## Development Commands

```bash
# Start development server (localhost:3000)
npm run dev

# Build static site (outputs to /out directory)
npm run build

# Lint code
npm run lint

# Optimize images in /public directory
npm run optimize:images
```

## Architecture

### Static Site Generation

The Next.js configuration (`next.config.ts`) is set up for static export:
- `output: 'export'` - generates static HTML/CSS/JS
- `images: { unoptimized: true }` - required for GitHub Pages
- `trailingSlash: true` - ensures proper routing on static hosts

The `out/` directory contains the built static site for deployment.

### Content Management

**All portfolio content lives in `app/page.tsx`** in a single `siteContent` object. This is the central location for:
- Hero section (headline, value proposition)
- About section content
- Skills categories and individual skills
- Experience entries (job history)
- Contact links

To update site content, edit the `siteContent` object in `app/page.tsx`, not the individual component files.

### Component Structure

Components in `/components` are presentation-only and receive all data as props:
- `Hero.tsx` - Landing section with background image
- `About.tsx` - Bio section
- `Skills.tsx` - Skill categories grid
- `Experience.tsx` - Timeline of positions
- `Contact.tsx` - Contact links with icons

Components are intentionally simple with no internal state or data fetching.

### Image Optimization

Use the custom optimization script before adding images to production:
```bash
npm run optimize:images
```

This script (in `/scripts/optimize-images.js`):
- Compresses JPEG, PNG, and GIF files
- Creates WebP versions for modern browsers
- Reports file size savings
- Maintains originals as fallbacks

See `/scripts/README.md` for detailed documentation on available scripts.

## Deployment

The site deploys to GitHub Pages from the `out/` directory:

1. Build: `npm run build`
2. Commit the `out/` directory changes
3. Push to the `main` branch
4. GitHub Pages serves from the repository root (CNAME file points to jmclaughlin.dev)

The `.nojekyll` file in `/public` prevents GitHub Pages from processing the site with Jekyll.

## Key Files

- `app/page.tsx` - **Primary content source** (edit site content here)
- `app/layout.tsx` - Site metadata and SEO configuration
- `next.config.ts` - Static export configuration
- `public/` - Static assets (images, CNAME, .nojekyll)
- `scripts/` - Utility scripts for image optimization
