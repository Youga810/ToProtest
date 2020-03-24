const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) =>{
  fs.readFile('./index.html', 'utf-8', (err, data) =>{
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write(data);
    console.log(req.url);
    res.end();
  }
);
});

const port = 8000;
server.listen(port, () => {
  console.log(`ポート番号：${port}番で接続しました`);
});