const fs = require("fs");
const path = require("path");

// Copy .next/static to .next/standalone/.next/
const staticSrc = path.join(".next", "static");
const staticDest = path.join(".next", "standalone", ".next", "static");
if (fs.existsSync(staticSrc)) {
	fs.cpSync(staticSrc, staticDest, { recursive: true });
}

// Copy public to .next/standalone/
const publicSrc = "public";
const publicDest = path.join(".next", "standalone", "public");
if (fs.existsSync(publicSrc)) {
	fs.cpSync(publicSrc, publicDest, { recursive: true });
}

// In .next/standalone/, rename server.js to server.mjs, create loader.cjs as server.js
const standaloneDir = path.join(".next", "standalone");
const serverJs = path.join(standaloneDir, "server.js");
const serverMjs = path.join(standaloneDir, "server.mjs");
const loaderCjs = path.join(standaloneDir, "loader.cjs");

// Create loader.cjs content
const loaderContent = `(async () => {
  await import('./server.mjs');
})();`;

// Rename server.js to server.mjs
if (fs.existsSync(serverJs)) {
	fs.renameSync(serverJs, serverMjs);
}

// Write loader.cjs
fs.writeFileSync(loaderCjs, loaderContent);

// Rename loader.cjs to server.js
fs.renameSync(loaderCjs, serverJs);
