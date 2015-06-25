PillPal.Views.MedicationForm = Backbone.View.extend({
  template: JST["backbone/medications/templates/new"],
  render:function () {
    this.$el.append(this.template)
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