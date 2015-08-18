/**
 *
 * Created by hywilliam on 8/3/15.
 */
var http = require("http");
var url = require('url');

function start(route, handle) {
    function onRequest(req, res) {
//        console.log('Request received.');
        var pathname = url.parse(req.url).pathname;
        console.log('Request for ' + pathname + ' received');
//        route(handle, pathname);

//        res.writeHead(200, {"Content-Type": "text/plain"});

//        var content = route(handle, pathname);
//        console.log(content);
//        res.write(content);
//        res.end();
//        route(handle, pathname, res);

//        var postData = '';
//        //设置了接收数据的编码格式为UTF-8
//        req.setEncoding('utf8');
//        //注册了“data”事件的监听器，用于收集每次接收到的新数据块，并将其赋值给postData 变量
//        req.on('data', function (postDataChunk) {
//            postData += postDataChunk;
//            console.log('Received POST data chunk "' + postData + '".');
//        });
//        //我们将请求路由的调用移到end事件处理程序中，以确保它只会当所有数据接收完毕后才触发，并且只触发一次。
//        //我们同时还把POST数据传递给请求路由，因为这些数据，请求处理程序会用到。
//        req.on('end', function () {
//            route(handle, pathname, res, postData);
//        })
        route(handle, pathname, res, req);
    }

    http.createServer(onRequest).listen(8888);
    console.log('Server has started on 8888');
}

exports.start = start;
