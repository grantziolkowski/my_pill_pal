window.PillPal = {
    Models: {},
    Routers: {},
    Views: {}
 }

$(document).ready(function(){
    window.router = new PillPal.Routers.Medications();
    Backbone.History.start;
});