PillPal.Views.Medications = Backbone.View.extend({
  template: JST["backbone/templates/medications/index"],
  tagName: "ul",
  events: {
    'click #my_meds_button': 'addAll'
  },
  addAll: function() {
    this.$el = $('#sidebar')
    this.$el.find("button").toggle()
    this.collection.map(function(medication) {
      this.addOne(medication)}, this)
      return this;
  },
  addOne: function(medication) {
    var itemView = new PillPal.Views.Medication({model: medication});
    this.$el.append(itemView.render().el)
    },
  render: function () {
    this.$el.html(this.template())
    return this;

  }
})

PillPal.Views.Medication = Backbone.View.extend({
  template: JST["backbone/templates/medications/show"],
  //  initialize: function() {
  //   template: JST["backbone/templates/medications/show"]
  // },
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
