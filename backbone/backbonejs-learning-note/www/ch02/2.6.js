/**
 * Created by hywilliam on 9/14/15.
 */

define(function (require) {

  var Backbone = require('backbone');

  var Man = Backbone.Model.extend({
    url: '/man/',

    initialize: function () {
      this.bind('change:name', function () {
        var name = this.get('name');
        alert('You changede the name ' + name)
      });
      this.bind('error', function (model, error) {
        alert(error)
      })
    },

    defaults: {
      name: 'wyh',
      age : 23
    },

    validate: function (attributes) {
      if (attributes.name === '') {
        return 'Name can not be undefined.'
      }
    },

    aboutMe: function () {
      return 'My name is ' + this.get('name')
    }
  });

  var man = new Man;

  man.set({
    name: 'william'
  });

  // POST到对应url
  man.save();

  var man1 = new Man;

//  man1.fetch();

  man1.fetch({
    url    : '/man/',
    success: function (model, response) {
      alert('success');
      console.log(model.get('name'))
    },
    error  : function () {
      alert(error)
    }
  });
});
