/**
 * Created by hywilliam on 9/29/15.
 */

var xModel = Backbone.Model.extend({
  defaults: {
    name : '',
    age  : '',
    adult: false
  },

  initialize: function () {
    // 实例化新增子类model时，根据age设定adult
    this.isAdult();
    // 若age改变，则相应变更adult
    this.on('change:age', this.isAdult);
  },

  isAdult: function () {
    this.set({adult: parseInt(this.get('age')) > 18});
  }
});

var jack = new xModel({
  name: 'jack',
  age : 29
});

console.log(jack);
