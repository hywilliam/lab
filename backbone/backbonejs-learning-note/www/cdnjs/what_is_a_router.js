/**
 * Created by hywilliam on 9/16/15.
 */

$(function () {

  var AppRouter = Backbone.Router.extend({
    routes: {
      // 动态路由，匹配#posts/12
      'posts/:id': 'getPost'
      // hash匹配，匹配任何#anything
//      '*actions' : 'defaultRouter'
    }
  });

  var appRouter = new AppRouter;

  appRouter.on('route:getPost', function (id) {
    alert('Get Post Number: ' + id)
  });
  // 路由事件触发
  appRouter.on('route:defaultRouter', function (action) {
    alert(action)
  });

  // 路由功能开启
  Backbone.history.start()
});