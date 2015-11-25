/**
 * Created by hywilliam on 11/19/15.
 *
 * The Collection
 * --------------
 */

var app = app || {};

var Todos = Backbone.Collection.extend({
    model: app.Todo,
    localStorage: new Backbone.LocalStorage('todo-app'),
    comparator: function (todo) {
        return todo.get('order');
    },
    setOrder: function () {
        return !this.length ? 1 : this.last().get('order') + 1;
    }
});

app.todos = new Todos();
