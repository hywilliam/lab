var app = app || {};
var ENTER_KEY = 13;
/**
 * The Model
 * ---------
 */
app.Todo = Backbone.Model.extend({
    defaults: {
        title: '',
        completed: false
    },

    toggle: function() {
        this.save({
            completed: !this.get('completed')
        });
    }
});

/**
 * The Collection
 * --------------
 */
var Todos = Backbone.Collection.extend({
    model: app.Todo,
    localStorage: new Backbone.LocalStorage('todo-app'),
    comparator: function(todo) {
        return todo.get('order');
    },
    setOrder: function() {
        return !this.length ? 1 : this.last().get('order') + 1;
    }
});

/**
 * The Item view
 * -------------
 */
app.ItemView = Backbone.View.extend({
    tagName: 'li',
    itemTpl: _.template($('#item-tpl').html()),
    events: {
        'click .toggle': 'toggleCompleted',
        'click .destroy': 'deleteOne'
    },

    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'destroy', this.remove);
        // 自定义事件
        // this.listenTo(this.model, 'visible', this.toggleVisible);
    },

    render: function() {
        this.$el.html(this.itemTpl(this.model.attributes));
        this.$el.toggleClass('completed', this.model.get('completed'));
        return this;
    },

    deleteOne: function() {
        this.model.destroy();
    },

    toggleCompleted: function() {
        this.model.toggle();
    },

    toggleVisible: function() {

    }
});

/**
 * The Application View
 * --------------------
 */
app.AppView = Backbone.View.extend({
    el: '#myApp',
    statsTpl: _.template($('#stats-tpl').html()),
    // V ===> M
    events: {
        'keypress .new-todo': 'createItemOnEnter'
    },

    initialize: function() {
        this.$input = this.$('.new-todo');
        this.$list = this.$('.todo-list');
        // M ===> V
        this.listenTo(app.todos, 'add', this.addOne);
        this.listenTo(app.todos, 'reset', this.addAll);
        this.listenTo(app.todos, 'all', this.render);

        // Data fetch
        app.todos.fetch({
            reset: true
        })
    },

    addOne: function(todo) {
        var view = new app.ItemView({
            model: todo
        });
        this.$list.append(view.render().el);
    },

    addAll: function() {
        this.$list.html('');
        app.todos.each(this.addOne, this);
    },

    createItemOnEnter: function(e) {
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
    newAttributes: function(input) {
        return {
            title: input,
            completed: false,
            order: app.todos.setOrder()
        }
    },

    render: function() {

    }
});

app.todos = new Todos();
$(function() {
    new app.AppView();
});
