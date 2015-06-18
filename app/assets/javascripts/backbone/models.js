PillPal.Models.Medication = Backbone.Model.extend({
})

PillPal.Models.Medications = Backbone.Collection.extend({
  initialize: function(options){
    this.userId = options.userId
  },
  model: PillPal.Models.Medication,
  url: '/users/' + this.userId + '/medications'
})
