const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const read = fs.createReadStream("./static/index.html");
  read.pipe(res);
});

const port = 3500;

server.listen(port);

console.log(`Server running on port: ${port}`);
