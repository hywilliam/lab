/**
 * Created by hywilliam on 9/16/15.
 */
$(document).ready(function () {
  var Human = Backbone.Model.extend({
    defaults  : {
      name: ''
    },
    initialize: function () {
//      alert('Alert a Human')
      this.on('change:name', function (model) {
        var name = model.get('name');
        alert('New name: ' + name)
      })
    }
  });

  var man = new Human({
    name: 'wyh',
    age : 23
  });

  man.set({
    name: 'william'
  });

  console.log(man)

});
