/**
 * Created by hywilliam on 9/11/15.
 *
 * 对象中的方法
 */
define(function (require, exports) {
  exports.name = '2.3';

  var Backbone = require('backbone');

  var Man = Backbone.Model.extend({
    initialize: function () {
      alert('You created a Man!');
    },

    // 方法在原型中，实例们共享哟
    sayHi: function () {
      return 'My name is ' + this.get('name') + ', I am ' + this.get('age') + ' years old.';
    }
  });

  var me = new Man({
    name: 'william',
    age : 23
  });

  var luffy = new Man({
    name : 'luffy',
    age  : 17,
    hobby: 'meat'
  });

  console.log(me.sayHi());
  console.log(luffy.sayHi());
});
