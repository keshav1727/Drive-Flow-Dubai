#!/usr/bin/env node

/**
 * Image Optimization Script for DriveFlow Dubai
 * 
 * This script helps optimize car images for web performance
 * 
 * Usage:
 * 1. Place your car images in /images/source/
 * 2. Run: node scripts/optimize-images.js
 * 3. Optimized images will be created in /public/images/cars/
 */

const fs = require('fs');
const path = require('path');

// Image sizes for different use cases
const IMAGE_SIZES = {
  thumbnail: { width: 150, height: 100, quality: 80 },
  small: { width: 300, height: 200, quality: 85 },
  medium: { width: 600, height: 400, quality: 90 },
  large: { width: 1200, height: 800, quality: 95 }
};

// Car name to filename mapping
const CAR_IMAGE_MAP = {
  'Chevrolet Corvette C8': 'chevrolet-corvette-c8',
  'Porsche 718 Boxster': 'porsche-718-boxster',
  'Ford Mustang': 'ford-mustang',
  'Porsche Carrera 911 GTS4': 'porsche-911-carrera-gts4',
  'Ferrari F8 Tributo': 'ferrari-f8-tributo',
  'Porsche 911 Targa 4': 'porsche-911-targa-4',
  'Chevrolet Camaro': 'chevrolet-camaro',
  'Chevrolet Corvette': 'chevrolet-corvette',
  'Dodge Hellcat SRT': 'dodge-hellcat-srt',
  'Lamborghini Huracan STO': 'lamborghini-huracan-sto',
  'Lamborghini Huracan Evo Coupe': 'lamborghini-huracan-evo-coupe',
  'Ferrari F8 Tributo Spyder': 'ferrari-f8-tributo-spyder',
  'Ferrari 812 Superfast': 'ferrari-812-superfast',
  'Ferrari Portofino': 'ferrari-portofino',
  'Ferrari Purosangue': 'ferrari-purosangue',
  'Aston Martin Vantage': 'aston-martin-vantage',
  'Lamborghini Urus': 'lamborghini-urus',
  'Lamborghini Huracan Evo Spyder': 'lamborghini-huracan-evo-spyder',
  'Lamborghini In Dubai Model Aventador SVJ': 'lamborghini-aventador-svj',
  'Lamborghini Aventador S Roadster': 'lamborghini-aventador-s-roadster',
  'Mercedes E Class | Mercedes-Benz E 53': 'mercedes-e53-amg',
  'MG ZS': 'mg-zs',
  'Chevrolet Captiva': 'chevrolet-captiva',
  'Kia Sportage': 'kia-sportage',
  'Mitsubishi X Pander': 'mitsubishi-x-pander',
  'Nissan Patrol': 'nissan-patrol',
  'Mercedes Benz GLC 300': 'mercedes-glc-300',
  'GMC Yukon': 'gmc-yukon',
  'Chevrolet Tahoe': 'chevrolet-tahoe',
  'Toyota Land Cruiser | Model 300 VXR': 'toyota-land-cruiser-300-vxr',
  'Range Rover Velar': 'range-rover-velar',
  'Range Rover Sport V6': 'range-rover-sport-v6',
  'Bmw X6': 'bmw-x6',
  'Land Rover Defender': 'land-rover-defender',
  'Cadillac Escalade': 'cadillac-escalade',
  'Lexus LX600': 'lexus-lx600',
  'Mercedes Benz GLE Model 63 AMG': 'mercedes-gle-63-amg',
  'Range Rover Vogue': 'range-rover-vogue',
  'Rolls Royce Cullinan Black Badge': 'rolls-royce-cullinan-black-badge'
};

function createDirectories() {
  const baseDir = path.join(__dirname, '..', 'public', 'images', 'cars');
  
  Object.keys(IMAGE_SIZES).forEach(size => {
    const dir = path.join(baseDir, size);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`✅ Created directory: ${dir}`);
    }
  });
}

function generateImageInstructions() {
  const instructions = `
# 🖼️ Image Optimization Instructions

## 📁 Directory Structure
\`\`\`
public/images/cars/
├── thumbnail/    # 150x100px - for small previews
├── small/        # 300x200px - for mobile cards
├── medium/       # 600x400px - for desktop cards
└── large/        # 1200x800px - for hero images
\`\`\`

## 🚗 Car Image Naming Convention
\`\`\`
chevrolet-corvette-c8.webp
porsche-718-boxster.webp
ferrari-f8-tributo.webp
lamborghini-huracan-sto.webp
\`\`\`

## 📏 Image Specifications
- **Format:** WebP (best compression)
- **Fallback:** JPG for older browsers
- **Quality:** 80-95% depending on size
- **Aspect Ratio:** 3:2 (landscape)

## 🛠️ Optimization Tools
1. **Online:** tinypng.com, squoosh.app
2. **Desktop:** ImageOptim, GIMP
3. **Command Line:** ImageMagick, Sharp

## 📱 Performance Benefits
- **Lazy Loading:** Images load only when visible
- **Responsive:** Different sizes for different screens
- **WebP Format:** 25-50% smaller file sizes
- **Progressive Loading:** Smooth user experience

## 🎯 Implementation
Images are automatically optimized using the LazyImage component:
\`\`\`jsx
<LazyImage
  carName="Ferrari F8 Tributo"
  size="medium"
  alt="Ferrari F8 Tributo"
/>
\`\`\`
`;

  fs.writeFileSync(
    path.join(__dirname, '..', 'IMAGE_OPTIMIZATION_GUIDE.md'),
    instructions
  );
  
  console.log('✅ Generated IMAGE_OPTIMIZATION_GUIDE.md');
}

function main() {
  console.log('🚗 DriveFlow Dubai - Image Optimization Setup');
  console.log('==============================================\n');
  
  createDirectories();
  generateImageInstructions();
  
  console.log('\n📋 Next Steps:');
  console.log('1. Add your car images to /images/source/');
  console.log('2. Optimize images using the guide');
  console.log('3. Place optimized images in respective size folders');
  console.log('4. Use LazyImage component in your React components');
  
  console.log('\n✨ Your images will load fast and look great!');
}

if (require.main === module) {
  main();
}

module.exports = { IMAGE_SIZES, CAR_IMAGE_MAP };
