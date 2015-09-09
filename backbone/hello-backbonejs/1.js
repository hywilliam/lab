/**
 *
 * Created by hywilliam on 9/9/15.
 */

(function ($) {

  var ListView = Backbone.View.extend({
//    el: $('body'),
//    tagName: 'body',
    el: 'body',

    initialize: function () {
      _.bindAll(this, 'render');
      this.render();
    },

    render: function () {
      $(this.el).append('<ul><li>Hello Ctrip</li></ul>');
    }
  });

  var listView = new ListView();

})(jQuery);
