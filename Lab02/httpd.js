const http = require('http');

const server = http.createServer((req,res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Hello World</h1>")
    res.write("<h1>Hello World1</h1>")
    console.log(req.method + " " + req.url + " " + req.httpVersion );
    res.end();
});

server.listen(8000);