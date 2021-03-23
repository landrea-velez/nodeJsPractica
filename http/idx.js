const http = require('http');
const fs = require('fs');

const home = fs.readFileSync('./home.html');
const about = fs.readFileSync('./about.html');

http.createServer((request, response) => {
    const { url } = request;
    //console.log(url);
    if(url === "/"){
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(home);
    }else if(url === '/about'){
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(about);
    }else{
        response.writeHead(404, {"Content-Type": "text/html"});
        response.write("PAGE NO FOUND ...")
    }    
    response.end();
}).listen(8080);