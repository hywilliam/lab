var app = app || {};

// The Application View
// --------------------

app.AppView = Backbone.View.extend({

    el: '.todoapp',

    statsTemplate: _.template($('#stats-template').html()),

    events: {
        'keypress .new-todo': 'createOnEnter',
        'click .clear-completed': 'clearCompleted',
        'click .toggle-all': 'toggleAllComplete'
    },

    initialize: function () {
        this.allCheckbox = this.$('.toggle-all')[0];
        this.$input = this.$('.new-todo');
        this.$main = this.$('.main');
        this.$footer = this.$('.footer');

        this.listenTo(app.todos, 'add', this.addOne);
        this.listenTo(app.todos, 'reset', this.addAll);

        this.listenTo(app.todos, 'change: completed', this.filterOne);
        this.listenTo(app.todos, 'filter', this.filterAll);
        this.listenTo(app.todos, 'all', this.render);

        app.todos.fetch();
    },

    render: function () {
        var completed = app.todos.completed().length;
        var remaining = app.todos.remaining().length;

        if (app.todos.length) {
            this.$main.show();
            this.$footer.show();

            this.$footer.html(this.statsTemplate({
                completed: completed,
                remaining: remaining
            }));

            this.$('.filters li a')
                .removeClass('selected')
                .filter('[href="#/' + (app.TodoFilter || '') + '"]')
                .addClass('selected');
        } else {
            this.$main.hide();
            this.$footer.hide();
        }

        this.allCheckbox.checked = !remaining;
    },

    /**
     * 当集合有新增条目事件的时候
     * @param todo
     */
    addOne: function (todo) {
        var view = new app.TodoView({model: todo});
        $('.todo-list').append(view.render().el);
    },

    /**
     * 当集合进行重置的时候
     */
    addAll: function () {
        this.$('.todo-list').html('');
        app.todos.each(this.addOne, this);
    },

    filterOne: function (todo) {
        todo.trigger('visible');
    },

    filterAll: function () {
        app.todos.each(this.filterOne, this);
    },

    /**
     * 为新创建的 item 生成属性
     * @returns {{title: (string|*), order: *, completed: boolean}}
     */
    newAttributes: function () {
        return {
            title: this.$input.val().trim(),
            order: app.todos.nextOrder(),
            completed: false
        }
    },

    /**
     * 在输入框按回车时，新增一个 item，存储到 localstorage 中
     * @param event
     */
    createOnEnter: function (event) {
        if (event.which !== ENTER_KEY || !this.$input.val().trim()) {
            return;
        }

        app.todos.create(this.newAttributes());
        this.$input.val('');
    },

    /**
     * 清除所有的已完成项
     * @returns {boolean}
     */
    clearCompleted: function () {
        _.invoke(app.todos.completed(), 'destroy');
        return false;
    },

    toggleAllComplete: function () {
        var completed = this.allCheckbox.checked;

        app.todos.each(function (todo) {
            todo.save({
                'completed': completed
            });
        });
    }
});
