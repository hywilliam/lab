/**
 * Created by hywilliam on 9/16/15.
 */

jQuery(function ($) {
  var SearchView = Backbone.View.extend({
    initialize: function () {
//        alert('Alert Suck!')
//        console.log(this.$el.html())
      this.render()
    },

    render: function () {
      var variables = {
        name: 'search'
      };

      // model和view该如何关联

//      var variables = man;
//        _.templateSettings = {
//          interpolate: /\{\{(.+?)\}\}/g
//        };
      // 传入模板，进行编译，可以进行正则匹配来设置模板形式，而且可以传入数据
      // 模板设置两种传参
//        var template = _.template($('#search-template').html(), {
//          evaluate   : /\{\{(.+?)\}\}/g,
//          interpolate: /\{\{=(.+?)\}\}/g,
//          escape     : /\{\{-(.+)\}\}/g
//        });
//        this.$el.html(template({
//          name: 'wyh'
//        }))
      var template = _.template($('#search-template').html())(variables);
      this.$el.html(template)
    },

    events: {
      'click #search-btn': 'doSearch'
    },

    doSearch: function () {
      alert('You are searching ' + $('#search-input').val())
    }
  });

  // initialize将会在实例化一个view时进行调用
//    var searchview = new SearchView;
  var searchview = new SearchView({
    el: $('#search-container')
  })
});
