/**
 * Created by hywilliam on 9/14/15.
 */
var express = require('express');

var app = express();

app.use(express.static('lib'));

app.get('/', function (req, res) {
  res.send('htllo');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('listening at http://%s:%s', host, port);
});
