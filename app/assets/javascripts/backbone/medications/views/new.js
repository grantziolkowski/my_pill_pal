PillPal.Views.MedicationForm = Backbone.View.extend({
  initialize: function(options) {
    this.userId = options.userId,
    this.collection = options.collection
  },
  template: JST["backbone/medications/templates/new"],
  render: function() {
    this.$el.append(this.template({userId: this.userId}))
    return this;
  },
  secondMedForm: function(e) {
    e.preventDefault();
    $('#medFormFirst').toggle();
    $('#medFormSecond').fadeIn();
  },
  addAliasField: function(e) {
    $('#medFormAliasPrompt').hide()
    $("#medFormAliasField").fadeIn()
  },
  addDayField: function(e) {
    $('#medFormDayPrompt').hide()
    $("#medFormSubmit").fadeIn()
  },
  submitForm: function(e) {
    e.preventDefault()
    var attributes = {}
    $(':input').each(function() {
      if (this.name === "") {
        return
      } else if (this.name === "user_medication_alias_prompt") {
        return
      }
      attributes[this.name] = this.value
      this.value = ""
    })
    this.collection.create(attributes)
    $('#medFormModal').foundation('reveal', 'close')
  }
})