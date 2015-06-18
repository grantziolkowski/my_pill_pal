PillPal.Models.Medication = Backbone.Model.extend({
})

PillPal.Models.Medications = Backbone.Collection.extend({
  initialize: function(options){
    this.userId = options.userId
    this.url = '/users/' + this.userId + '/medications'
  },
  model: PillPal.Models.Medication,
})
