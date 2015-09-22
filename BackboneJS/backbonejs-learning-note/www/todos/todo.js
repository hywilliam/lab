/**
 * Created by hywilliam on 9/15/15.
 *
 * 按功能去写实现，然后再去优化代码，先实现
 */

jQuery(function ($) {
  // behaves like $(document).ready(func..)
  // shortcut $(func...)

  // 主要就四个模块，Model Collection TodoView AppView

  // Todo Model
  // ----------

  var Todo = Backbone.Model.extend({

    defaults: {
      title: 'empty todo...',
      order: Todos.nextOrder(),
      done : false
    },

    /**
     * 改变done属性状态，并保存到持久层，本例为localstorage，因为save默认调用sync方法
     */
    toggle: function () {
      this.save({done: !this.get('done')})
    }
  });

  // Todo Collection
  // ---------------

  var TodoCollection = Backbone.Collection.extend({

    model: Todo,

    localStorage: new Backbone.LocalStorage('todo-list'),

    // 已完成的todos
    done: function () {
      // where 是一个filter，过滤出具有所给属性的对象，返回一个Collection 子集
      return this.where({done: true})
    },

    // 未完成的todos
    remaining: function () {
      return this.where({done: false})
    },

    // 下一个model的order
    nextOrder: function () {
      // 我觉着这个地方用underscore的方法比较好（错误看法）
      // 哈哈，看了源代码才清楚，这里last并不是jQuery的last方法，而是backbone对underscore方法的代理。
      // 一样是可以传值来找末尾几个值的哟
      return this.length ? this.last().get('order') + 1 : 1
    },

    // 内部属性：指明Collection的排序规则，新加入的item会插入到指定的位置
    comparator: 'order'

  });

  // 全局的Collection实
  var Todos = new TodoCollection;

  // Todo Item View
  // ---------

  // 一个TodoView的构造函数，也就是一个item的DOM元素
  var TodoView = Backbone.View.extend({

    tagName: 'li',

    // template是个function哟
    template: _.template($('item-template').html()),

    // 单个it支持的功能事件映射
    events: {
      'click .toggle'      : 'toggleDone',
      'dblclick .item-view': 'edit',
      'click a.destroy'    : 'clear',
      'keypress .edit'     : 'updateOnEnter',
      'blur .edit'         : 'close'
    },

    // 这个地方怎么关联起来的呢
    initialize: function () {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'destroy', this.remove)
    },

    // 重新渲染todo item的title
    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      this.$el.toggleClass('done', this.model.get('done'));
      this.input = this.$('.edit');
      return this;
    },

    toggleDone: function () {
      this.model.toggle()
    },

    edit: function () {
      this.$el.addClass('editing');

      this.input.focus()
    },

    clear: function () {
      this.model.destroy()
    },

    updateOnEnter: function (e) {
      if (e.keyCode === 13) this.close()
    },

    close: function () {
      var value = this.input.val();

      if (!value) {
        this.clear()
      } else {
        this.model.save({title: value});
        this.$el.removeClass('editing')
      }
    }
  });

  // Todo App View
  // -------------

  var AppView = Backbone.View.extend({

    el: $('#myApp'),

    statsTemplate: _.template($('#stats-template').html()),

    events: {
      'keypress #new-item'    : 'createOnEnter',
      'click #clear-completed': 'clearCompleted',
      'click #toggle-all'     : 'toggleAllComplete'
    },

    initialize: function () {

      this.input = this.$('#new-item');
      this.allCheckbox = this.$el.find('#toggle-all')[0];
      this.footer = this.$('footer');
      this.main = this.$('#main');

      this.listenTo(Todos, 'add', this.addOne);
      this.listenTo(Todos, 'all', this.render);

      Todos.fetch();
    },

    render: function () {
      var done = Todos.done().length;
      var remaining = Todos.remaining().length;

      if (Todos.length) {
        this.main.show();
        this.footer.show();
        this.footer.html(this.statsTemplate({
          done     : done,
          remaining: remaining
        }))
      } else {
        this.main.hide();
        this.footer.hide()
      }

      this.allCheckbox.checked = !remaining
    },

    addOne: function (todo) {
      var view = new TodoView({
        model: todo
      });
      this.$('#todo-list').append(view.render().el);
    },

    createOnEnter: function (e) {
      if (e.keyCode !== 13) return;
      if (this.input.val() === '') return;

      Todos.create({
        title: this.input.val()
      });

      this.input.val('')
    },

    clearCompleted: function () {

      _.invoke(Todos.done(), 'destroy');

      return false
    },

    toggleAllComplete: function () {

      var done = this.allCheckbox.checked;

      Todos.each(function (item) {
        item.save({done: done})
      })
    }
  });

  var App = new AppView;
});


// Here test webstorm git vsc again