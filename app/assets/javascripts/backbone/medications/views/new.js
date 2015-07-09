PillPal.Views.MedicationForm = Backbone.View.extend({
  initialize: function(options) {
    this.userId = options.userId
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
})