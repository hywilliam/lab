/**
 *
 * Created by hywilliam on 8/3/15.
 */
//var exec = require('child_process').exec;
var querystring = require('querystring');
var fs = require('fs');
var formidable = require('formidable');

function start(res, postData) {
    console.log('Request handle "start" was called.');

//    function sleep(milliSeconds) {
//        var startTime = new Date().getTime();
//        while (new Date().getTime() < startTime + milliSeconds) {
//        }
//    }
//    // 模拟休眠10s，但由于是单线程阻塞了后续操作
//    sleep(10000);
//    return 'Hello Start';
//    var content = 'empty';

//    exec('find /', {timeout: 10000, maxBuffer: 20000 * 1024}, function (err, stdout, stderr) {
////        content = stdout;
//        res.writeHead(200, {'Content-Type': 'text/plain'});
//        res.write(stdout);
//        res.end();
//    });
//    return content;
    var body = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" content="text/html; ' +
        'charset=UTF-8" />' +
        '</head>' +
        '<body>' +
        '<form action="/upload" enctype="multipart/form-data" method="post">' +
//        '<textarea name="text" rows="20" cols="60"></textarea>' +
        '<input type="file" name="upload" multiple="multiple">' +
//        '<input type="submit" value="Submit text" />' +
        '<input type="submit" value="Upload file" />' +
        '</form>' +
        '</body>' +
        '</html>';

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(body);
    res.end();
}

function upload(res, req/*postData*/) {
    console.log('Request handle "upload" was called.');
//    return 'Hello Upload';
//    res.writeHead(200, {"Content-Type": "text/plain"});
////    res.write("Hello Upload");
//    res.write('You have sent the text: ' + querystring.parse(postData).text);
//    res.end();
    var form = new formidable.IncomingForm();
    console.log('about to parse');
    form.parse(req, function (err, fields, files) {
        console.log('parsing done');
        fs.renameSync(files.upload.path, './tmp/test.jpg');
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("received image:<br/>");
        res.write("<img src='/show' />");
        res.end();
    });
}

function show(res) {
    console.log('Request handler "show" was called.');
    fs.readFile('./tmp/test.jpg', 'binary', function (err, file) {
        if (err) {
            res.writeHead(500, {"Content-Type": "text/plain"});
            res.write(err + "\n");
            res.end();
        } else {
            res.writeHead(200, {"Content-Type": "image/jpg"});
            res.write(file, "binary");
            res.end();
        }
    })
}

exports.start = start;
exports.upload = upload;
exports.show = show;
