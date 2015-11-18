var app = app || {};

// The Router
// ----------

var Workspace = Backbone.Router.extend({
    routes: {
        '*filter': 'setFilter'
    },

    setFilter: function (param) {
        if (param) {
            param = param.trim();
        }
        app.TodoFilter = param || '';

        app.todos.trigger('filter');
    }
});

app.TodoRouter = new Workspace();
Backbone.history.start();