/**
 * Created by hywilliam on 9/9/15.
 */

(function ($) {

  // Model
  var Item = Backbone.Model.extend({
    // ???
    defaults: {
      part1: 'hello',
      part2: 'Ctrip'
    }
  });

  // Collection of Items
  var List = Backbone.Collection.extend({
    model: Item
  });

  // View
  var ListView = Backbone.View.extend({

    el: $('body'),

    events: {
      'click button#add': 'addItem'
    },

    initialize: function () {
      // this是当前的View，el为body的View
      _.bindAll(this, 'render', 'addItem', 'appendItem');

      this.collection = new List();
      // jQuery的bind，collection的add事件处理
      this.collection.bind('add', this.appendItem);

      this.counter = 0;
      this.render();
    },

    render: function () {

      var self = this;
      $(this.el).append('<button id="add">Add List Item</button>');
      $(this.el).append('<ul></ul>');

      // 预防 collection 不为空
      _(this.collection.models).each(function (item) {
        self.appendItem(item);
      }, this);
    },

    // Model/Collection deal
    addItem: function () {

      this.counter++;
      var item = new Item();

      item.set({
        part2: item.get('part2') + this.counter
      });

      this.collection.add(item);
    },

    // View update
    appendItem: function (item) {
      $('ul').append('<li>' + item.get('part1') + ' ' + item.get('part2') + '</li>');
    }

  });

  var listView = new ListView();
})(jQuery);
