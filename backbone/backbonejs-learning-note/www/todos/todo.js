/**
 * Created by hywilliam on 9/15/15.
 */

jQuery(function ($) {
  // behaves like $(document).ready(func..)
  // shortcut $(func...)

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

  var TodoList = Backbone.Collection.extend({

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

  // 全局的Collection实例
  var Todos = new TodoList;

  // Todo Item View
  // ---------

  // 一个TodoView的构造函数，也就是一个item的DOM元素
  var TodoView = Backbone.View.extend({

    tagName: 'li',

    template: _.template($('item-template').html()),

    render: function () {

    }
  });
});
