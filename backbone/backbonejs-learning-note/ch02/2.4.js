/**
 * Created by hywilliam on 9/11/15.
 *
 * 监听对象中属性的变化
 */
define(function (require, exports) {
  exports.name = '2.4';

  var Backbone = require('backbone');

  var Man = Backbone.Model.extend({

    initialize: function () {
      // 所有实例都有哟
//      this.bind('change:name', this.reName);
      this.on('change:name', this.reName);
    },

    reName: function () {
      alert('You changed my name to ' + this.get('name'));
    }
  });

  var william = new Man({
    name: 'william',
    age : 23
  });

  william.set('name', 'wyh');
});
