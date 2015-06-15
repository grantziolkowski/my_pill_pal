PillPal.Views.Medications = Backbone.View.extend({
  template: JST["backbone/templates/medications/index"],
  tagName: "ul",
  initialize: function() {
    this.collection.on("reset", this.addAll());
  },
  addAll: function() {
    this.collection.map(function(medication) {
      this.addOne(medication)}, this)
  },
  addOne: function(medication) {
    var itemView = new PillPal.Views.Medication({model: medication});
    this.$el.append(itemView.render().el)
    },
  render: function () {
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
