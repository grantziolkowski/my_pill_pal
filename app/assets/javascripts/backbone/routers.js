PillPal.Routers.Medications = Backbone.Router.extend({
  initialize: function() {
    this.sidebar = $('#sidebar')
    this.medications = new PillPal.Models.Medications();
  },
  routes: {
    "profile" : "userMedications"
  },
  userMedications: function() {
    var medications = this.medications
    var that = this
    medications.fetch().then(function() {
      var collectionView = new PillPal.Views.Medications({
        collection: medications});
      that.sidebar.html(collectionView.render().el)
    })
  }
})

