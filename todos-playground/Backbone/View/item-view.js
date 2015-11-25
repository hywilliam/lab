/**
 * Created by hywilliam on 11/19/15.
 *
 * The Item view
 * -------------
 */

var app = app || {};

app.ItemView = Backbone.View.extend({
    tagName: 'li',
    itemTpl: _.template($('#item-tpl').html()),
    events: {},
    initialize: function () {

    },
    render: function () {
        this.$el.html(this.itemTpl(this.model.attributes));
        return this;
    }
});
