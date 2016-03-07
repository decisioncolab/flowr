var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hey there! \n');
}).listen(8080);
console.log('http server runnig at port 8080');