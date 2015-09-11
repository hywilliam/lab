/**
 * Created by hywilliam on 9/11/15.
 *
 * 为对象添加验证规则，以及错误提示
 */

define(function (require, exports) {
  exports.name = '2.5';

  var Backbone = require('backbone');

  var Man = Backbone.Model.extend({
    initialize: function () {
      this.on({
        'invalid'    : this.verify,
        'change:name': this.reName
      });
    },

    reName: function () {
      alert('You change my name to' + this.get('name'));
    },

    verify: function (model, error) {
      console.log(error);
    },

    validate: function (attributes) {
      if (!attributes.name) {
        return ' 名字不能为空 ';
      }
    }
  });

  var man = new Man({
    name: 'william',
    age : 23
  });

  // 默认set时并不进行验证
//  man.set('name', 'wyh');
//  man.set('name', '');
  // 手动触发验证
  man.set({name: ''}, {'validate': true});
  // save时触发验证，即validata函数
//  man.save();
});
