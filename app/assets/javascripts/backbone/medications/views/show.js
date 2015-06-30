PillPal.Views.Medication = Backbone.View.extend({
  initialize: function() {

   },
  template: JST["backbone/medications/templates/show"],
  render: function () {
    this.$el.append(this.template(this.model.toJSON()));
    this.color();
    return this;
  },
  renderCal: function() {
    this.$el = $("#pill_bins").find("[data-day='" + this.model.toJSON().day + "']")
    this.$el.append(this.template(this.model.toJSON()))
    this.$el.find("a.button").removeClass("small").addClass("tiny")
    this.color()
    return this;
  },
  color: function () {
    this.$el.find("a.button").css({"background-color": this.model.toJSON().color})
  }
})
