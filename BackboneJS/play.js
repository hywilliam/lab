(function ($) {
    var View = Backbone.View.extend({
        el: $('body'),

        initialize: function(){
            _.bindAll(this, 'render');

            this.render();
        },

        render: function () {
            this.$el.append('<ul><li>Hello World!</li></ul>');
        }
    });

    var v = new View();
}(jQuery));
