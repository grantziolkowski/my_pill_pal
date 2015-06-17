PillPal.Views.Medications = Backbone.View.extend({
  template: JST["backbone/templates/medications/index"],
  initialize: function() {

  },
  events: {
    'click #my_meds_button': 'addAll',
    'click .med_buttons': 'drag'
  },
  addAll: function() {
    this.$pillList = $("#pill_list")
    $("#my_meds_button").toggle()
    $("#schedule_button").toggle({duration: 1000, queue: false})
    this.collection.map(function(medication) {
      this.addOne(medication)}, this)
    this.prepareDraggables();
      return this;
  },
  addOne: function(medication) {
    var itemView = new PillPal.Views.Medication({model: medication});
    this.$pillList.append(itemView.render().el)
  },
  prepareDraggables: function() {
    $(".med_buttons").draggable();
  },
  drag: function() {
    event.preventDefault();
  },
  render: function () {
    this.$el.html(this.template())
    return this;

  }
})

PillPal.Views.Medication = Backbone.View.extend({
  template: JST["backbone/templates/medications/show"],
  tagName: "li",
  // events: {
  //   "click a.destroy" : "destroy"
  // },
  // initialize: function() {
  //   this.model.on("destroy", this.removeThis())
  // },
  // destroy: function() {
  //   this.model.destroy();
  // },
  // removeThis: function(medication) {
  //   this.model.remove();
  //   },
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
})
