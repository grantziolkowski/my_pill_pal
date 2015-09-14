PillPal.Views.Medication = Backbone.View.extend({
  template: JST["backbone/medications/templates/show"],
  events: {
    'click .med_buttons': 'showLabel'
  },
  render: function () {
    this.$el.append(this.template(this.model.toJSON()));
    this.color();
    // this.delegateEvents();
    return this;
  },
  renderCal: function() {
    this.$el = $("#pill_bins").find("[data-day='" + this.model.toJSON().day + "']")
    this.$el.append(this.template(this.model.toJSON()))
    this.$el.find("a.button").removeClass("small").addClass("tiny")
    this.color()
    this.delegateEvents();
    return this;
  },
  color: function () {
    this.$el.find("a.button").css({"background-color": this.model.toJSON().color})
  },
  showLabel: function() {
    // $('#medInfoModal').foundation('reveal', 'open')
    $('.label').hide()
   var label = this.$el.children().find("[data-id='" + this.model.toJSON().id + "']")
   label.toggle()
  }
})
