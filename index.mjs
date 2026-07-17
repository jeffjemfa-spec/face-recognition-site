import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const faceHtml = fs.readFileSync(path.join(process.cwd(), "public", "face.html"));

const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/face.html") {
    res.writeHead(200, {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store",
    });
    res.end(faceHtml);
    return;
  }

  res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
  res.end("Not found");
});

const port = Number(process.env.PORT || 3000);
server.listen(port, "0.0.0.0", () => {
  console.log(`Face card site listening on ${port}`);
});
