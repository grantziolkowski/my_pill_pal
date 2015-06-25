PillPal.Views.Medication = Backbone.View.extend({
  template: JST["backbone/medications/templates/show"],
  render: function () {
    this.$el.append(this.template(this.model.toJSON()));
    this.$el.find("a.button").css({"background-color": this.model.toJSON().color})
    return this;
  },
  renderCal: function() {
    this.$el = $("#pill_bins").find("[data-day='" + this.model.toJSON().day + "']")
    this.$el.append(this.template(this.model.toJSON()))
    return this;
  }

})
