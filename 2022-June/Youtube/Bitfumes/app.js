const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello node");
  res.end();
});

server.listen(3000);
