/**
 * Created by hywilliam on 11/19/15.
 *
 * The Collection
 * --------------
 */

var app = app || {};

var Todos = Backbone.Collection.extend({
    model: app.Todo,

    localStorage: new Backbone.LocalStorage('todo-app')
});

app.todos = new Todos();
