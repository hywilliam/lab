/**
 * Created by hywilliam on 9/9/15.
 */
(function ($) {

  // 重写sync方法，防止调用model.destroy()的时候报错
  Backbone.sync = function (method, model, success, error) {
    success();
  };

  var Item = Backbone.Model.extend({
    defaults: {
      part1: 'Hello',
      part2: 'ctrip'
    }
  });

  var List = Backbone.Collection.extend({
      model: Item
    }
  );

  var ItemView = Backbone.View.extend({
      tagName   : 'li',
      events    : {
        'click button.swap'  : 'swap',
        'click button.delete': 'remove'
      },
      initialize: function () {
        _.bindAll(this, 'render', 'unrender', 'swap', 'remove');

        this.model.bind('change', this.render);
        this.model.bind('remove', this.unrender);
      },
      render    : function () {
        $(this.el).html('<span style="color: #000;">' + this.model.get('part1') + ' ' + this.model.get('part2') + '<button class="swap">Swap</button>' + '<button class="delete">delete</button>' + '</span>')
        return this;
      },
      unrender  : function () {
        $(this.el).remove();
      },
      swap      : function () {
        var swapped = {
          part1: this.model.get('part2'),
          part2: this.model.get('part1')
        };
        this.model.set(swapped);
      },
      remove    : function () {
        this.model.destroy();
      }
    }
  );
  var ListView = Backbone.View.extend({
    el        : $('body'),
    events    : {
      'click button#add': 'addItem'
    },
    initialize: function () {
      _.bindAll(this, 'render', 'addItem', 'appendItem');

      this.collection = new List();
      this.collection.bind('add', this.appendItem);

      this.counter = 0;
      this.render();
    },
    render    : function () {
      var self = this;
      var container = $(this.el);
      container.append('<button id="add">Click Me to Add An Item</button>');
      container.append('<ul></ul>');

      _(this.collection.models).each(function (item) {
        self.appendItem(item);
      }, this);
    },
    addItem   : function () {
      this.counter++;
      var item = new Item;
      item.set({
        part2: item.get('part2') + this.counter
      });
      this.collection.add(item);
    },
    appendItem: function (item) {
      var itemView = new ItemView({
        model: item
      });
      $('ul').append(itemView.render().el);
    }
  });

  var listView = new ListView();
})(jQuery);
