var App.Routers.Medications = Backbone.Router.extend({
  routes: {
    "" : "listMedications"
  },
  listMedications: function() {
    var medications = new App.Models.Medications();
    medications.fetch();
    var collectionView = new App.Views.Medications({
      collection: medications});
    $("#sidebar").html(collectionView.render().el)
  }
})
