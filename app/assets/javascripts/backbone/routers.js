PillPal.Routers.Medications = Backbone.Router.extend({
  initialize: function() {
    this.sidebar = $('#sidebar')
    this.medications = new PillPal.Models.Medications();
  },
  routes: {
    "profile" : "listMedications"
  },
  listMedications: function() {
    console.log("listing");
    var medications = this.medications;
    var collectionView = new PillPal.Views.Medications({
      collection: medications});
      this.sidebar.html(collectionView.render().el)
  }
})
