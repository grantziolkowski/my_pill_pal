$(function () {
  window.router = new App.MedicationsRouter()
  Backbone.History.start()
})

var App.MedicationsRouter = Backbone.Router.extend({
  routes: {
    "" : "listMedications"
  },
  listMedications: function() {
    var medications = new App.Models.Medications;
    medications.fetch();
    var collectionView = new App.Views.Medications({
      collection: medications});
    $("#medications").html(collectionView.render().el)
  }
})