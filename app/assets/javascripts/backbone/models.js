PillPal.Models.Medication = Backbone.Model.extend({
  urlRoot:'users/:user_id/medications'
})

PillPal.Models.Medications = Backbone.Collection.extend({
  model: PillPal.Models.Medication,
  url: 'profile'
})
