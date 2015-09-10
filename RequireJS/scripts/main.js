/**
 * Created by hywilliam on 9/9/15.
 */

//alert('I am the main module');

//require(['a', 'b', 'c'], function (a, b, c) {
//
//  alert('I am the main module');
//});

require.config({
  baseUrl: 'scripts/lib',
  paths  : {
    moduleA: 'a',
    moduleB: 'b',
    moduleC: 'c'
  }
});

// 写了config也要至少写一个require
require(['moduleA', 'moduleB', 'moduleC'], function (a, b, c) {
  a();
});