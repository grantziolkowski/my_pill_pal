$(document).ready(function(){
    window.App = {
    Models: {},
    Routers: {},
    Views: {}
    }

    window.router = new App.Routers.Medications();
    Backbone.History.start()
});