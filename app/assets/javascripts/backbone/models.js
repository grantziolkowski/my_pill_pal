PillPal.Models.Medication = Backbone.Model.extend({
})

PillPal.Models.Medications = Backbone.Collection.extend({
  model: PillPal.Models.Medication,
  url: 'users/:id/medications'
})
