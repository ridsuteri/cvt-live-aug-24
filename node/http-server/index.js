const { createServer } = require('http');
const hostname = '127.0.0.1'; // http://localhost
const port = 3000;  // : 3000

const server = createServer((req, res) => {
  res.statusCode = 400;
  res.setHeader('Content-Type', 'text/plain');
  //   console.log(req);
  res.end(JSON.stringify({message: 'Hello World, using nodemon'}));
  // res.send
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});