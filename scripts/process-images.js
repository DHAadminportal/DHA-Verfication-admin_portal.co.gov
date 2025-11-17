import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.join(__dirname, '..');

/**
 * Process coat of arms - remove background and crop
 */
async function processCoatOfArms() {
  console.log('📸 Processing Coat of Arms...');
  
  const inputPath = path.join(PROJECT_ROOT, 'attached_assets/coat-of-arms-transparent.png');
  const outputPath = path.join(PROJECT_ROOT, 'attached_assets/coat-of-arms-processed.png');
  
  try {
    // Load image to get metadata
    const metadata = await sharp(inputPath).metadata();
    console.log(`  Original size: ${metadata.width}x${metadata.height}`);
    
    // Process: remove background, trim, and optimize
    await sharp(inputPath)
      .trim({
        background: { r: 255, g: 255, b: 255, alpha: 0 },
        threshold: 10
      })
      .png({ quality: 100, compressionLevel: 9 })
      .toFile(outputPath);
    
    const newMetadata = await sharp(outputPath).metadata();
    console.log(`  Processed size: ${newMetadata.width}x${newMetadata.height}`);
    console.log(`✅ Coat of arms processed: ${outputPath}`);
    
    return outputPath;
  } catch (error) {
    console.error('❌ Error processing coat of arms:', error.message);
    return null;
  }
}

/**
 * Create professional scanned document effect
 */
async function createScannedEffect(inputPath, outputPath) {
  console.log(`📄 Creating scanned effect: ${path.basename(inputPath)}`);
  
  try {
    // Load original
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Apply scanned document effect:
    // 1. Slight rotation (0.5 degrees)
    // 2. Reduce saturation slightly
    // 3. Add subtle grain/noise
    // 4. Compress to add artifacts
    await image
      .rotate(0.5, { background: { r: 250, g: 250, b: 245 } })
      .modulate({
        brightness: 0.98,
        saturation: 0.9
      })
      .jpeg({ quality: 92, progressive: true })
      .toFile(outputPath);
    
    console.log(`  ✅ Created: ${outputPath}`);
    return outputPath;
  } catch (error) {
    console.error(`  ❌ Error: ${error.message}`);
    return null;
  }
}

/**
 * Remove QR code area from document image
 * QR codes are typically in bottom-right corner
 * IMPORTANT: Maintains JPEG encoding to avoid format mismatches
 */
async function removeQRCodeArea(inputPath, outputPath) {
  console.log(`🔲 Processing (removing QR area): ${path.basename(inputPath)}`);
  
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Create a white rectangle to cover QR code area (bottom-right corner)
    // Typical QR code position is around 480, 720 with 80x80 size
    const qrX = Math.floor(metadata.width * 0.75);
    const qrY = Math.floor(metadata.height * 0.80);
    const qrSize = Math.floor(metadata.width * 0.15);
    
    // Create white overlay for QR code area
    const whiteOverlay = Buffer.from(
      `<svg width="${qrSize}" height="${qrSize}">
        <rect width="${qrSize}" height="${qrSize}" fill="rgb(250,250,245)"/>
      </svg>`
    );
    
    // Maintain original format (JPEG for .jpg/.jpeg, PNG for .png)
    const ext = path.extname(inputPath).toLowerCase();
    const imageProcessor = image.composite([{
      input: whiteOverlay,
      top: qrY,
      left: qrX,
      blend: 'over'
    }]);
    
    if (ext === '.png') {
      await imageProcessor.png({ quality: 100 }).toFile(outputPath);
    } else {
      await imageProcessor.jpeg({ quality: 100, progressive: true }).toFile(outputPath);
    }
    
    console.log(`  ✅ QR area removed: ${outputPath}`);
    return outputPath;
  } catch (error) {
    console.error(`  ❌ Error: ${error.message}`);
    return null;
  }
}

/**
 * Process all PDF template images
 */
async function processAllTemplates() {
  console.log('\n📚 Processing all PDF template images...\n');
  
  const templates = [
    { file: 'IMG_9057_1763376990739.JPG', type: 'Birth Certificate' },
    { file: 'IMG_9149_1763377454038.png', type: 'Permanent Residence' },
    { file: 'IMG_9144_1763377365326.png', type: 'Permanent Resident' },
    { file: 'IMG_6491_1763377420758.png', type: 'Naturalization' },
    { file: 'IMG_9147_1763377365325.png', type: 'Work Permit' },
    { file: 'IMG_9142_1763377365326.png', type: 'Work Visa' },
    { file: 'IMG_9145_1763377365326.png', type: "Relative's Permit" },
    { file: 'IMG_9143_1763377365326.png', type: 'Refugee Status' },
    { file: 'IMG_9146_1763377365326.png', type: 'Refugee Certificate' },
    { file: 'IMG_9151_1763377831129.jpeg', type: 'Formal Recognition' },
    { file: 'IMG_9150_1763377831128.png', type: 'Refugee 4 Years' },
    { file: 'IMG_9141_1763377365326.png', type: 'Declaration' }
  ];
  
  const processedDir = path.join(PROJECT_ROOT, 'attached_assets/processed');
  if (!fs.existsSync(processedDir)) {
    fs.mkdirSync(processedDir, { recursive: true });
  }
  
  const results = [];
  
  for (const template of templates) {
    const inputPath = path.join(PROJECT_ROOT, 'attached_assets', template.file);
    
    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  Skipping ${template.file} - not found`);
      continue;
    }
    
    console.log(`\n🔄 Processing: ${template.type}`);
    
    // Step 1: Remove QR code area if present
    const noQRPath = path.join(processedDir, `no-qr-${template.file}`);
    await removeQRCodeArea(inputPath, noQRPath);
    
    // Step 2: Create scanned effect
    const ext = path.extname(template.file);
    const baseName = path.basename(template.file, ext);
    const scannedPath = path.join(processedDir, `${baseName}-scanned.jpg`);
    await createScannedEffect(noQRPath, scannedPath);
    
    results.push({
      type: template.type,
      original: inputPath,
      processed: scannedPath
    });
  }
  
  console.log('\n✅ All templates processed!');
  console.log(`📁 Processed files location: ${processedDir}`);
  
  return results;
}

/**
 * Main execution
 */
async function main() {
  console.log('🚀 Starting image processing...\n');
  console.log('=' .repeat(60));
  
  // Process coat of arms
  await processCoatOfArms();
  
  console.log('\n' + '='.repeat(60) + '\n');
  
  // Process all template images
  const results = await processAllTemplates();
  
  console.log('\n' + '='.repeat(60));
  console.log('\n📊 Processing Summary:');
  console.log(`   Total templates processed: ${results.length}`);
  console.log('\n✅ Image processing complete!');
}

// Run if executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export { processCoatOfArms, createScannedEffect, removeQRCodeArea, processAllTemplates };
