/**
 * Created by hywilliam on 9/9/15.
 */

(function ($) {

  var ListView = Backbone.View.extend({
    el: $('body'),

    // Backbone不分离Controllers来处理事件，都在View层中实现
    events: {
      'click button#add': 'addItem'
    },

    initialize: function () {
      _.bindAll(this, 'render', 'addItem');

      this.counter = 0;
      this.render();
    },

    render: function () {
      $(this.el).append('<button id="add">Add List Item</button>');
      $(this.el).append('<ul></ul>');
    },

    addItem: function () {
      this.counter++;
//      $('ul', this.el).
//      $('ul', this.el).append('<li>Hello Ctrip' + this.counter + '</li>');
      $('ul').append('<li>Hello Ctrip' + this.counter + '</li>');
      $(this.el).append('11');
    }
  });

  var listView = new ListView();
})(jQuery);
