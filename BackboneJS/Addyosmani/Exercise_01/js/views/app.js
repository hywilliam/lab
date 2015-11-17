var app = app || {};

// The Application View
// --------------------

app.AppView = Backbone.View.extend({

    el: '#todoapp',

    statsTemplate: _.template($('#stats-template').html()),

    events: {
        'keypress #new-todo': 'createOnEnter',
        'click #clear-completed': 'clearCompleted',
        'click #toggle-all': 'toggleAllCompleted'
    },

    initialize: function () {
        this.allCheckbox = this.$('#toggle-all')[0];
        this.$input = this.$('#new-todo');
        this.$main = this.$('#main');
        this.$footer = this.$('footer');

        this.listenTo(app.Todos, 'add', this.addOne);
        this.listenTo(app.Todos, 'reset', this.addAll);

        this.listenTo(app.Todos, 'change: completed', this.filterOne);
        this.listenTo(app.Todos, 'filter', this.filterAll);
        this.listenTo(app.Todos, 'all', this.render);

        app.Todos.fetch();
    },

    render: function () {

    },

    addOne: function () {
        var view = new app.TodoView({model: todo});
        $('#todo-list').append(view.render().el);
    },

    addAll: function () {
        this.$('#todo-list').html('');
        app.Todos.each(this.addOne, this);
    },

    filterOne: function () {

    },

    filterAll: function () {

    },

    newAttributes: function () {

    },

    createOnEnter: function () {

    },

    clearCompleted: function () {

    },

    toggleAllComplete: function () {

    }
});
