#!/usr/bin/env node

/**
 * Image Optimization Script
 * 
 * This script optimizes images for the portfolio site:
 * - Compresses images to reduce file size
 * - Converts images to WebP format where supported
 * - Maintains original images as fallbacks
 * 
 * Usage: node scripts/optimize-images.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '../public');
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif'];

/**
 * Get all image files from a directory
 */
function getImageFiles(dir) {
  const files = [];
  
  if (!fs.existsSync(dir)) {
    console.log(`Directory ${dir} does not exist`);
    return files;
  }
  
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getImageFiles(fullPath));
    } else {
      const ext = path.extname(item).toLowerCase();
      if (IMAGE_EXTENSIONS.includes(ext)) {
        files.push(fullPath);
      }
    }
  }
  
  return files;
}

/**
 * Optimize a single image file
 */
async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const basename = path.basename(filePath, ext);
  const dirname = path.dirname(filePath);
  
  console.log(`Optimizing: ${path.relative(PUBLIC_DIR, filePath)}`);
  
  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();
    
    // Get original file size
    const originalSize = fs.statSync(filePath).size;
    
    // Optimize based on format
    let optimized;
    if (ext === '.png') {
      optimized = image.png({ quality: 80, compressionLevel: 9 });
    } else if (ext === '.jpg' || ext === '.jpeg') {
      optimized = image.jpeg({ quality: 80, progressive: true });
    } else if (ext === '.gif') {
      optimized = image.gif();
    } else {
      console.log(`  Skipping unsupported format: ${ext}`);
      return;
    }
    
    // Save optimized version (overwrite original)
    const optimizedPath = filePath;
    await optimized.toFile(optimizedPath + '.tmp');
    fs.renameSync(optimizedPath + '.tmp', optimizedPath);
    
    const optimizedSize = fs.statSync(optimizedPath).size;
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    
    console.log(`  Original: ${(originalSize / 1024).toFixed(1)}KB`);
    console.log(`  Optimized: ${(optimizedSize / 1024).toFixed(1)}KB`);
    console.log(`  Savings: ${savings}%`);
    
    // Create WebP version for modern browsers
    const webpPath = path.join(dirname, basename + '.webp');
    await sharp(filePath)
      .webp({ quality: 80 })
      .toFile(webpPath);
    
    const webpSize = fs.statSync(webpPath).size;
    console.log(`  WebP: ${(webpSize / 1024).toFixed(1)}KB`);
    
  } catch (error) {
    console.error(`  Error optimizing ${filePath}:`, error.message);
  }
}

/**
 * Main function
 */
async function main() {
  console.log('Starting image optimization...\n');
  
  const imageFiles = getImageFiles(PUBLIC_DIR);
  
  if (imageFiles.length === 0) {
    console.log('No images found to optimize.');
    return;
  }
  
  console.log(`Found ${imageFiles.length} image(s) to optimize\n`);
  
  for (const file of imageFiles) {
    await optimizeImage(file);
    console.log('');
  }
  
  console.log('Image optimization complete!');
}

main().catch(console.error);
