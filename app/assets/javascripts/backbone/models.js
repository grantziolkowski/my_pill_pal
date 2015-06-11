PillPal.Models.Medication = Backbone.Model.extend({
  url: ''
})

PillPal.Models.Medications = Backbone.Collection.extend({
  model: PillPal.Models.Medication,
  url: ''
})
