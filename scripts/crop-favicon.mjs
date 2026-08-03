import sharp from 'sharp';

const inputPath = 'public/logo.png';

// Load image as raw RGBA pixels to find bounding box
async function findBoundingBox(inputFile) {
  const image = sharp(inputFile);
  const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  let minX = width, minY = height, maxX = 0, maxY = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      const a = channels === 4 ? data[idx + 3] : 255;

      const isWhite = r > 240 && g > 240 && b > 240;
      const isTransparent = a < 20;

      if (!isWhite && !isTransparent) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  return { minX, minY, maxX, maxY, width, height };
}

const { minX, minY, maxX, maxY, width, height } = await findBoundingBox(inputPath);

// Add a small padding (4px)
const pad = 4;
const left  = Math.max(0, minX - pad);
const top   = Math.max(0, minY - pad);
const right  = Math.min(width - 1, maxX + pad);
const bottom = Math.min(height - 1, maxY + pad);
const cropWidth  = right - left + 1;
const cropHeight = bottom - top + 1;

console.log(`Original: ${width}x${height}`);
console.log(`Crop box: x=${left}, y=${top}, w=${cropWidth}, h=${cropHeight}`);

// 1. Save cropped favicon (256x256)
await sharp(inputPath)
  .extract({ left, top, width: cropWidth, height: cropHeight })
  .resize(256, 256, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
  .png()
  .toFile('public/favicon.png');
console.log('Saved: public/favicon.png');

// 2. Save cropped logo for header/footer (high-res, natural size)
await sharp(inputPath)
  .extract({ left, top, width: cropWidth, height: cropHeight })
  .png()
  .toFile('src/assets/logo-cropped.png');
console.log('Saved: src/assets/logo-cropped.png');
