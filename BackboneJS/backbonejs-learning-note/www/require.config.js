/**
 * Created by hywilliam on 9/11/15.
 */
require.config({
//  baseUrl: 'lib',
  paths: {
    // 3rd
    jquery    : 'todos/lib/jquery',
    underscore: 'todos/lib/underscore',
    backbone  : 'todos/lib/backbone',
    chap02: 'ch02/index'
  },

  shim: {
    backbone: {
      des: ['jquery', 'underscore'],
      exports: 'Backbone'
    }
  }

});

require(['chap02']);