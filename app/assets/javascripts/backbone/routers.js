PillPal.Routers.Medications = Backbone.Router.extend({
  initialize: function() {
    this.calendar = $('#calendar')
  },
  routes: {
    "users/:id/medications" : "userMedications"
  },
  userMedications: function(id) {
    var medications = new PillPal.Models.Medications({userId: id});
    var that = this;
    medications.fetch().then(function() {
      var medsView = new PillPal.Views.Medications({
        collection: medications});
      that.calendar.append(medsView.render().el)
    })
  }
})

