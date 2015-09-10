/**
 * Created by hywilliam on 9/10/15.
 */
require.config({
  baseUrl: 'http://localhost:8080/bower_components/',
  paths  : {
    '_': 'underscore/underscore'
  }
});

require(['_'], function (_) {
  var list = [1, 2, 2, 2, 2, 2];

  _.each(list, function (item, index) {
    ++item;
  });

  console.log(list);
});

