console.log("Hello")

const Client = require("bitcoin-core");
const http = require('http');

const hostname = '127.0.0.1'
const port = 3000;

//const wallet1 = new Client({
	//host: '127.0.0.1',
	//port: '5332',
	//username: 'coinuser',
	//password: 'coinpassword'
//});

//wallet1.command('getbalance').then((response) => console.log(response));



const server = http.createServer((req, res) => {
  console.log(req.headers);
  res.statusCode = 200;
  //res.setHeader('Content-Type', 'text/plain');
  res.end('<html><body><h3>Hello, World!</h3></body></html>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});