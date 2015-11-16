var TodoRouter = Backbone.Router.extend({
    routers: {
        'about': 'showAbout',
        'search/:query': 'searchTodos',
        'search/:query/p:page': 'searchTodos'
    },

    showAbout: function() {
        // TODO:
    },

    searchTodos: function(query, page) {
        var pageNum = page || 1;
        console.log('Page number: ' + pageNum + ' now is query' +
            query);
    }
});

var myTodoRouter = new TodoRouter();

Backbone.history.start();
