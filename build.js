const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

const indexContent = fs.readFileSync(path.join(__dirname, 'index.js'), 'utf8');
fs.writeFileSync(path.join(distDir, 'index.bundle.js'), indexContent);

console.log('Build tamamlandi -> dist/index.bundle.js olusturuldu');
