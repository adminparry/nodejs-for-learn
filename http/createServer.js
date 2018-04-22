const http = require('http');

const server = http.createServer((req, res) => {
  const ip = res.socket.remoteAddress;
  const port = res.socket.remotePort;
  res.end(`你的IP地址是 ${ip}，你的源端口是 ${port}。`);
}).listen(3000);