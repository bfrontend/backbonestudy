var http = require('http');

const server = http.createServer(hanleReqs);

var handleMap = {
  '/man/': manHandle
}

function hanleReqs(req, res) {
  for (const key in handleMap) {
    console.log(key, req.url)
    if (key === req.url) {
      handleMap[key].call(this, ...arguments)
    }
  }
};

function manHandle(req, res) {
  res.end('aaa')
}

server.listen(5501);