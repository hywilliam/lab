/**
 * Created by hywilliam on 9/14/15.
 */
var express = require('express');

var app = express();

// 静态文件服务
//app.use(express.static(__dirname + '/lib'));
app.use(express.static(__dirname + '/www'));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('listening at http://%s:%s', host, port);
});
