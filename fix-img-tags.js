const fs = require('fs');
const path = require('path');

// List of files that need fixing based on the build output
const filesToFix = [
    'src/app/products/bollards/page.tsx',
    'src/app/products/dfmd/page.tsx',
    'src/app/products/full-height-turnstile/page.tsx',
    'src/app/products/hhmd/page.tsx',
    'src/app/products/p-type-swing-barrier/page.tsx',
    'src/app/products/parking-guidance/page.tsx',
    'src/app/products/parking-information/page.tsx',
    'src/app/products/parking-management/page.tsx',
    'src/app/products/rfid-solution/page.tsx',
    'src/app/products/road-blocker/page.tsx',
    'src/app/products/siren-system/page.tsx',
    'src/app/products/solutions/page.tsx',
    'src/app/products/tripod-turnstile/page.tsx',
    'src/app/products/tyre-killer/page.tsx',
    'src/app/products/visitor-management/page.tsx',
    'src/app/products/vms-mobile/page.tsx'
];

filesToFix.forEach(file => {
    const filePath = path.join(__dirname, file);

    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;

        // Pattern 1: <img src={var} alt="..." className="..." />
        content = content.replace(
            /<img\s+src=\{([^}]+)\}\s+alt="([^"]+)"\s+className="([^"]+)"\s*\/>/g,
            (match, src, alt, className) => {
                modified = true;
                // Extract dimensions from className if possible
                const hasHeightClass = className.match(/h-(\d+|full|\[\d+px\])/);
                const height = hasHeightClass ? hasHeightClass[0] : 'h-64';
                return `<div className="relative w-full ${height}">\n                  <Image\n                    src={${src}}\n                    alt="${alt}"\n                    fill\n                    className="${className.replace(/w-full\s*/g, '').trim()}"\n                  />\n                </div>`;
            }
        );

        // Pattern 2: <img ... /> with multiline
        content = content.replace(
            /<img\s+src=\{([^}]+)\}\s+alt="([^"]+)"\s+className="([^"]+)"\s+\/>/gm,
            (match, src, alt, className) => {
                modified = true;
                const hasHeightClass = className.match(/h-(\d+|full|\[\d+px\])/);
                const height = hasHeightClass ? hasHeightClass[0] : 'h-64';
                return `<div className="relative w-full ${height}">\n                  <Image\n                    src={${src}}\n                    alt="${alt}"\n                    fill\n                    className="${className.replace(/w-full\s*/g, '').trim()}"\n                  />\n                </div>`;
            }
        );

        if (modified) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`✓ Fixed: ${file}`);
        } else {
            console.log(`- Skipped (no changes needed): ${file}`);
        }
    } catch (error) {
        console.error(`✗ Error processing ${file}:`, error.message);
    }
});

console.log('\nDone!');
