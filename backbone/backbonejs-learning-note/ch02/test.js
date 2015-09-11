/**
 * Created by hywilliam on 9/11/15.
 */
define(function (require) {
  var $ = require('jquery');
  var _ = require('underscore');
  var Backbone = require('backbone');

//  console.log('index page');

  var foo = function () {
    alert('index page');
  };

  var Word = Backbone.Model.extend({
    name: ''
  });

  var AppView = Backbone.View.extend({
    el: $('body'),

    initialize: function () {

      var word = new Word({
        name: 'wyh'
      });
//      var word = new Word('wyh');

      this.render(word);
    },

    render: function (model) {
      $(this.el).append('<h1>' + model.get('name') + '</h1>');
    }

  });

  var app = new AppView;

});
