const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
  const file = path.join(__dirname, 'index.html');
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  fs.createReadStream(file).pipe(res);
}).listen(PORT, () => {
  console.log(`\n  ⊙ HORUS Spectrum Vision corriendo en:\n`);
  console.log(`  → http://localhost:${PORT}\n`);
  console.log(`  Abre esa URL en tu navegador (Chrome/Safari recomendado)\n`);
});
