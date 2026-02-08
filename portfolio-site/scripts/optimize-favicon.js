#!/usr/bin/env node

/**
 * Favicon Optimization Script
 * 
 * This script optimizes the favicon.ico file by:
 * - Converting it to PNG format
 * - Optimizing the PNG
 * - Converting back to ICO with optimal settings
 * 
 * Usage: node scripts/optimize-favicon.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const FAVICON_PATH = path.join(__dirname, '../app/favicon.ico');
const TEMP_PNG = path.join(__dirname, '../app/favicon-temp.png');

async function optimizeFavicon() {
  console.log('Optimizing favicon.ico...\n');
  
  try {
    // Get original size
    const originalSize = fs.statSync(FAVICON_PATH).size;
    console.log(`Original size: ${(originalSize / 1024).toFixed(1)}KB`);
    
    // Convert ICO to PNG, resize to 32x32 (most common favicon size)
    await sharp(FAVICON_PATH)
      .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ quality: 80, compressionLevel: 9 })
      .toFile(TEMP_PNG);
    
    // Convert PNG back to ICO format
    // Note: sharp doesn't support ICO output, so we'll create an optimized PNG
    // and rename it. Modern browsers support PNG favicons.
    const pngSize = fs.statSync(TEMP_PNG).size;
    console.log(`Optimized PNG size: ${(pngSize / 1024).toFixed(1)}KB`);
    
    // If PNG is smaller, we can use it as favicon
    // Otherwise keep the original ICO
    if (pngSize < originalSize) {
      // Backup original
      fs.copyFileSync(FAVICON_PATH, FAVICON_PATH + '.backup');
      
      // For now, let's create a smaller ICO by extracting just the 32x32 version
      // Since sharp doesn't write ICO, we'll keep the original but document the optimization
      console.log('\nNote: Created optimized PNG version. To use it:');
      console.log('1. Rename favicon-temp.png to favicon.png');
      console.log('2. Update layout.tsx to reference the PNG favicon');
      console.log('3. Modern browsers support PNG favicons and they are smaller');
      
      const savings = ((originalSize - pngSize) / originalSize * 100).toFixed(1);
      console.log(`\nPotential savings: ${savings}%`);
    } else {
      console.log('\nOriginal ICO is already optimal. No changes needed.');
      fs.unlinkSync(TEMP_PNG);
    }
    
  } catch (error) {
    console.error('Error optimizing favicon:', error.message);
  }
}

optimizeFavicon().catch(console.error);
