//create web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname;
    var ext = path.extname(pathname);
    var type = '';

    switch (ext) {
        case '.html':
            type = 'text/html';
            break;
        case '.css':
            type = 'text/css';
            break;
        case '.js':
            type = 'text/javascript';
            break;
        default:
            type = 'text/plain';
    }

    fs.readFile(pathname.substr(1), function(err, data) {
        if (err) {
            console.log(err);
            response.writeHead(404, {'Content-Type': 'text/html'});
        } else {
            response.writeHead(200, {'Content-Type': type});
            response.write(data.toString());
        }
        response.end();
    });
}).listen(8080);

console.log('Server running at http://