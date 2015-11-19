/**
 * Created by hywilliam on 11/19/15.
 *
 * The Model
 * ---------
 */

var app = app || {};

app.Todo = Backbone.Model.extend({
    defaults: {
        title: '',
        completed: false
    }
});
