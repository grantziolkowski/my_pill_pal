window.PillPal = {
    Models: {},
    Routers: {},
    Views: {}
 }

$(document).ready(function(){
    window.router = new PillPal.Routers.Index();
    Backbone.history.start({pushState: true})
});