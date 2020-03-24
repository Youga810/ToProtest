const http = require('http');

const server = http.createServer((req, res) =>{
  res.writeHead(200, {'Content-Type' : 'text/plain'});
  
  res.write('hello world!');
  res.end();
});

const port = 8000;
server.listen(port, () => {
  console.log(`ポート番号：${port}番で接続しました`);
});