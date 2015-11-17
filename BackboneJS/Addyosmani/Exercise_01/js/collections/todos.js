var app = app || {};

// The Collection
// --------------

var TodoList = Backbone.Collection.extend({

    model: app.Todo,

    localStorage: new Backbone.LocalStorage('todo-app'),

    completed: function () {
        return this.filter(function (todo) {
            return todo.get('completed');
        });
    },

    /**
     * 这里，without, apply, completed 是很巧妙的搭配
     * @returns {*}
     */
    remaining: function () {
        return this.without.apply(this, this.completed());
    },

    nextOrder: function () {
        if (!this.length) {
            return 1;
        }
        return this.last().get('order') + 1;
    },

    comparator: function (todo) {
        return todo.get('order');
    }
});

app.Todos = new TodoList();
