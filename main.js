const http = require('http');

const server = http.createServer((req, res) => {
  // TODO: Implement this function

  if(req.method==="GET")
  {
    res.end(JSON.stringify({
      "method": "GET",
      "url": req.url
    }))
  }
  else if(req.method==="POST")
  {
    res.end(JSON.stringify({
      "method": "POST",
      "url": req.url
    }))
  }
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

module.exports = { server };
