/**
 * Created by hywilliam on 9/11/15.
 *
 * 最简单的Backbone Model
 */

define(function (require, exports) {

  var $        = require('jquery'),
      _        = require('underscore'),
      Backbone = require('backbone');

  var Man = Backbone.Model.extend({
    initialize: function () {
      alert('Hey, you created me!');
    }
  });

  // 实例化的时候会直接执行initialize
  var man = new Man;

  exports.name = '第二章第一节';
});
