/**
 * Created by hywilliam on 11/19/15.
 *
 * The Application View
 * --------------------
 */

var app = app || {};

app.AppView = Backbone.View.extend({
    el: '#myApp',

    statsTpl: _.template($('#stats-tpl').html()),

    // V ===> M
    events: {
        'keypress .new-todo': 'createItemOnEnter'
    },

    initialize: function () {
        this.$input = this.$('.new-todo');

        // M ===> V
        this.listenTo(app.todos, 'add', this.addOne);
        this.listenTo(app.todos, 'all', this.render);
    },

    addOne: function (todo) {
        var view = new app.ItemView({
            model: todo
        });
        this.$('.todo-list').append(view.render().el);
    },

    createItemOnEnter: function (e) {
        var content = this.$input.val().trim();
        if (e.which === ENTER_KEY && content.length) {

            // emit 'add' event
            app.todos.create(this.newAttributes(content));
            this.$input.val('')
        } else {
            return;
        }
    },

    /**
     * 创建新增 model 的属性
     */
    newAttributes: function (input) {
        return {
            title: input,
            completed: false,
            order: app.todos.setOrder()
        }
    },

    render: function () {

    }
});
