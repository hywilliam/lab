/**
 * Created by hywilliam on 9/24/15.
 */

require.config({
    paths: {
        'jquery'               : 'lib/jquery',
        'underscore'           : 'lib/underscore',
        'backbone'             : 'lib/backbone',
        'backbone.LocalStorage': 'lib/backbone.localStorage'
    },
    shim : {
        'backbone'             : {
            deps   : ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        'backbone.LocalStorage': {
            deps   : ['backbone'],
            exports: 'Backbone.LocalStorage'
        }
    }
});

require(['todo'], function (todo) {
    var App = new todo();
});