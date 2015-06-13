PillPal.Routers.Medications = Backbone.Router.extend({
  routes: {
    "profile" : "listMedications"
  },
  listMedications: function() {
    var medications = new PillPal.Models.Medications();
    medications.fetch();
    var collectionView = new PillPal.Views.Medications({
      collection: medications});
    $("#sidebar").html(collectionView.render().el)
  }
})
