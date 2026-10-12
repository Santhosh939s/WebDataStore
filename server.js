const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'data.json');
const HTML_FILE = path.join(__dirname, 'index.html');

// Ensure default data.json exists
if (!fs.existsSync(DATA_FILE)) {
  const initialData = {
    santhosh: { ip: '', password: '', updatedAt: null },
    jaya: { ip: '', password: '', updatedAt: null }
  };
  fs.writeFileSync(DATA_FILE, JSON.stringify(initialData, null, 2), 'utf-8');
}

const server = http.createServer((req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, HEAD');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  // API Endpoint: /api/data
  if (req.url === '/api/data') {
    if (req.method === 'HEAD') {
      res.writeHead(200);
      return res.end();
    }

    if (req.method === 'GET') {
      try {
        const raw = fs.readFileSync(DATA_FILE, 'utf-8');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(raw);
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: err.message }));
      }
    }

    if (req.method === 'POST') {
      let body = '';
      req.on('data', chunk => { body += chunk; });
      req.on('end', () => {
        try {
          const parsed = JSON.parse(body);
          fs.writeFileSync(DATA_FILE, JSON.stringify(parsed, null, 2), 'utf-8');
          res.writeHead(200, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ status: 'saved', updatedAt: new Date().toISOString() }));
        } catch (err) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ error: 'Invalid JSON body' }));
        }
      });
      return;
    }
  }

  // Serve Frontend index.html
  if (req.url === '/' || req.url === '/index.html') {
    try {
      const html = fs.readFileSync(HTML_FILE, 'utf-8');
      res.writeHead(200, { 'Content-Type': 'text/html' });
      return res.end(html);
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      return res.end('Error loading index.html: ' + err.message);
    }
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not Found');
});

server.listen(PORT, () => {
  console.log(`\n=================================================`);
  console.log(`🚀 CloudVault Server running locally!`);
  console.log(`🌐 Open in browser: http://localhost:${PORT}`);
  console.log(`📁 Auto-saving to: ${DATA_FILE}`);
  console.log(`=================================================\n`);
});
