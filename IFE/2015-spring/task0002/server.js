/**
 *
 * Created by hywilliam on 7/22/15.
 */
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text-plain'
    });
    res.end('helloworld');
}).listen(1337, '127.0.0.1');

console.log('Server is ready');