window.PillPal = {
    Models: {},
    Routers: {},
    Views: {}
 }

$(document).ready(function(){
    $("#sidebar").draggable();
    window.router = new PillPal.Routers.Medications();
    Backbone.history.start({pushState: true})
});