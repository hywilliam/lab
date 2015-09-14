/**
 * Created by hywilliam on 9/11/15.
 *
 * 对象赋值(初始化属性)的两种方法
 */
define(function (require, exports) {
  exports.name = '2.2';

  var Backbone = require('backbone');

  var Man = Backbone.Model.extend({

    initialize: function () {
      alert('You created a Man!');
    },

    // 直接定义，设置默认值，这个默认值是存在Man原型中，然后实例化后跑到每个实例中，修改实例属性会覆盖原型中的属性
    // 并不会造成别的实例同名属性的变化
    defaults: {
      name: 'william',
      age : '23'
    }

  });

//  var man = new Man;
  var guy = new Man;
//  console.log(man.get('name'));
//  console.log(guy.get('name') === man.get('name'));
  guy.set('name', 'wyh');

  var Woman = Backbone.Model.extend({
    initialize: function () {
      alert('You created a Woman!')
    }
  });

  var girl = new Woman;
  // 这种初始化实例属性，只在实例中有
  girl.set({
    'name': 'hanmeimei',
    'age' : 13
  });

  // 创建实例时，直接传参怎么样呢
  // 和上面一样，这样多nice
  var les = new Woman({
    name: 'lucy',
    age : 444
  });

  console.log(girl);
  console.log(les);
});
