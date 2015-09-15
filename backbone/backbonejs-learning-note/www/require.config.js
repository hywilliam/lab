/**
 * Created by hywilliam on 9/11/15.
 */
require.config({
//  baseUrl: 'lib',
  paths: {
    // 3rd
    jquery    : 'lib/jquery',
    underscore: 'lib/underscore',
    backbone  : 'lib/backbone',
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