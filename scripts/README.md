# Portfolio Site Scripts

This directory contains utility scripts for maintaining and optimizing the portfolio site.

## Available Scripts

### optimize-images.js

**Purpose**: Batch optimize images for web delivery

**What it does**:
- Compresses JPEG, PNG, and GIF images
- Creates WebP versions for modern browsers
- Reports file size savings
- Maintains original format as fallback

**Usage**:
```bash
# Run directly
node scripts/optimize-images.js

# Or use npm script
npm run optimize:images
```

**Requirements**:
- `sharp` package (installed as Next.js dependency)

**Example output**:
```
Starting image optimization...

Found 3 image(s) to optimize

Optimizing: hero-image.jpg
  Original: 450.2KB
  Optimized: 180.5KB
  Savings: 59.9%
  WebP: 125.3KB

Optimizing: profile.png
  Original: 320.8KB
  Optimized: 210.4KB
  Savings: 34.4%
  WebP: 145.2KB

Image optimization complete!
```

**When to use**:
- After adding new images to `public/` directory
- Before deploying to production
- When updating existing images

### optimize-favicon.js

**Purpose**: Optimize the favicon.ico file

**What it does**:
- Analyzes the current favicon
- Creates an optimized PNG version
- Reports potential file size savings

**Usage**:
```bash
node scripts/optimize-favicon.js
```

**Note**: This script creates a PNG version of the favicon. To use it:
1. Review the generated `favicon-temp.png`
2. If satisfied, rename it to `favicon.png`
3. Update `app/layout.tsx` to reference the PNG favicon
4. Modern browsers support PNG favicons and they're typically smaller

**Requirements**:
- `sharp` package (installed as Next.js dependency)

## Adding New Scripts

When adding new utility scripts:

1. **Create the script** in this directory
2. **Add documentation** to this README
3. **Add npm script** to `package.json` if appropriate
4. **Use Node.js shebang**: `#!/usr/bin/env node`
5. **Include error handling** and helpful console output

## Script Guidelines

### File Paths
Always use `path.join(__dirname, '../relative/path')` for cross-platform compatibility:

```javascript
const path = require('path');
const PUBLIC_DIR = path.join(__dirname, '../public');
```

### Error Handling
Wrap operations in try-catch blocks:

```javascript
try {
  // Operation
} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}
```

### Console Output
Provide clear, helpful output:
- ✅ What the script is doing
- ✅ Progress indicators
- ✅ Results and statistics
- ✅ Next steps or recommendations

### Dependencies
- Prefer built-in Node.js modules
- Use existing project dependencies when possible
- Document any new dependencies required

## Related Documentation

- [IMAGE_OPTIMIZATION.md](../IMAGE_OPTIMIZATION.md) - Complete image optimization guide
- [package.json](../package.json) - npm scripts configuration
- [next.config.ts](../next.config.ts) - Next.js configuration

## Troubleshooting

### "Cannot find module 'sharp'"
The `sharp` package should be installed as a Next.js dependency. If missing:
```bash
npm install sharp
```

### "Permission denied"
Make scripts executable:
```bash
chmod +x scripts/*.js
```

### "ENOENT: no such file or directory"
Ensure you're running scripts from the project root:
```bash
# From project root
node scripts/optimize-images.js

# Not from scripts directory
cd scripts
node optimize-images.js  # ❌ Wrong
```
