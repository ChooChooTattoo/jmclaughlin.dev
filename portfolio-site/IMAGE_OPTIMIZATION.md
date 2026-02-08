# Image Optimization Guide

This document describes the image optimization strategy for the professional portfolio site.

## Current Status

### Assets Cleaned Up
- ✅ Removed unused SVG files (window.svg, globe.svg, next.svg, vercel.svg, file.svg)
- ✅ All assets are now in the `public/` directory as required

### Current Assets
- `app/favicon.ico` - 25.3KB (default Next.js favicon)
- `public/CNAME` - Custom domain configuration
- `public/.nojekyll` - GitHub Pages configuration

## Optimization Strategy

### 1. Favicon Optimization

The current favicon.ico is 25.3KB. For optimal performance:

**Option A: Use PNG Favicon (Recommended)**
Modern browsers support PNG favicons, which are typically smaller:

```bash
# If you have ImageMagick installed:
convert app/favicon.ico -resize 32x32 app/favicon.png
```

Then update `app/layout.tsx` to reference the PNG:

```typescript
export const metadata: Metadata = {
  // ... other metadata
  icons: {
    icon: '/favicon.png',
  },
};
```

**Option B: Optimize ICO File**
Use an online tool like:
- https://www.icoconverter.com/
- https://favicon.io/

Upload your favicon and download an optimized version (target: <10KB).

### 2. Future Image Assets

When adding images to the site:

#### For Raster Images (Photos, Screenshots)
1. **Compress images** before adding them:
   - Use tools like TinyPNG, ImageOptim, or Squoosh
   - Target quality: 80-85%
   - Maximum width: 1920px for full-width images

2. **Create WebP versions** for modern browsers:
   ```bash
   # Using the optimization script
   node scripts/optimize-images.js
   ```

3. **Use appropriate formats**:
   - WebP: Best compression, modern browsers (primary)
   - JPEG: Photos and complex images (fallback)
   - PNG: Images with transparency (fallback)

#### For Vector Graphics (Icons, Logos)
1. **Use SVG** for scalable graphics
2. **Optimize SVGs**:
   - Remove unnecessary metadata
   - Minify paths
   - Use tools like SVGO

3. **Inline small SVGs** in components for better performance

### 3. Next.js Image Optimization

**Important**: This site uses static export (`output: 'export'`), which means Next.js Image Optimization is **disabled**.

From `next.config.ts`:
```typescript
images: {
  unoptimized: true
}
```

This is required for GitHub Pages deployment. Therefore:
- ✅ Pre-optimize all images before adding them
- ✅ Use the `optimize-images.js` script for batch optimization
- ✅ Manually create WebP versions for modern browsers
- ❌ Cannot use `next/image` component's automatic optimization

### 4. Responsive Images

When adding images, provide multiple sizes for responsive design:

```html
<picture>
  <source srcset="/image-small.webp" media="(max-width: 768px)" type="image/webp">
  <source srcset="/image-large.webp" media="(min-width: 769px)" type="image/webp">
  <source srcset="/image-small.jpg" media="(max-width: 768px)" type="image/jpeg">
  <img src="/image-large.jpg" alt="Description" loading="lazy">
</picture>
```

## Optimization Scripts

### optimize-images.js
Located in `scripts/optimize-images.js`

**Purpose**: Batch optimize all images in the `public/` directory

**Features**:
- Compresses JPEG, PNG, and GIF images
- Creates WebP versions automatically
- Reports file size savings
- Preserves original format as fallback

**Usage**:
```bash
node scripts/optimize-images.js
```

**Requirements**:
- `sharp` package (already installed as Next.js dependency)

### Adding Images Workflow

1. **Add original image** to `public/` directory
2. **Run optimization script**:
   ```bash
   node scripts/optimize-images.js
   ```
3. **Verify results** - check console output for savings
4. **Use in components** with WebP + fallback:
   ```tsx
   <picture>
     <source srcset="/image.webp" type="image/webp" />
     <img src="/image.jpg" alt="Description" />
   </picture>
   ```

## Performance Targets

Per Requirements 13.2 and 10.4:

- ✅ Images optimized for web delivery
- ✅ Appropriate image formats (WebP with fallbacks)
- ✅ Images in `public/` directory
- ✅ Minimal bundle size (no unused assets)

### Current Performance
- No images currently in use (text-only portfolio)
- Favicon: 25.3KB (can be optimized to <10KB)
- Total asset size: ~25KB

### Target Performance
- Favicon: <10KB
- Individual images: <200KB (compressed)
- WebP versions: 25-35% smaller than JPEG/PNG
- Total page load: <3 seconds on standard broadband

## Validation

To verify optimization:

1. **Check file sizes**:
   ```bash
   ls -lh public/
   ```

2. **Build and check bundle**:
   ```bash
   npm run build
   ls -lh out/
   ```

3. **Test in browser**:
   - Open DevTools → Network tab
   - Check image sizes and formats
   - Verify WebP is served to modern browsers

## References

- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [WebP Image Format](https://developers.google.com/speed/webp)
- [Sharp Image Processing](https://sharp.pixelplumbing.com/)
- Requirements: 13.2 (Optimize images for web delivery)
- Requirements: 10.4 (Include all necessary assets)
