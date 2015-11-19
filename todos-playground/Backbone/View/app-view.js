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

    events: {
        'keypress .new-todo': 'addOne'
    },

    initialize: function () {
        this.$input = this.$('.new-todo');

        this.listenTo(app.todos, 'add', this.addOne);
        this.listenTo(app.todos, 'all', this.render);
    },

    /**
     * 1.有输入内容
     * 2.按回车
     * @param e
     */
    addOne: function (e) {
        var content = this.$input.val().trim();
        if (e.which === ENTER_KEY && content.length) {
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
            completed: false
        }
    },

    /**
     * 只要 Collection 上有事件发生，就会执行的页面渲染
     * 更新两个模板视图
     */
    render: function () {

    }
});
