const http = require('http');

http.createServer((request, response) => {
    response.write("Hello world from Nodejs");
    response.end();
}).listen(8080);