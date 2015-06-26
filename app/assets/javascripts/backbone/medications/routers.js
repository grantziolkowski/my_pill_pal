PillPal.Routers.Medications = Backbone.Router.extend({
  initialize: function() {
    this.$container = $('#content-container')
  },
  routes: {
    "profile" : "userMedications"
  },
  userMedications: function(id) {
    var medications = new PillPal.Models.Medications({userId: id});
    var that = this;
    medications.fetch().then(function() {
      var medsView = new PillPal.Views.Medications({
        collection: medications});
      that.$container.append(medsView.render().el)
      that.$container.append(medsView.addAll())
    })
  }
})
