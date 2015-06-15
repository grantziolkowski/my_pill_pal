PillPal.Views.Medications = Backbone.View.extend({
  template: JST["backbone/templates/medications/show"],
  initialize: function() {
    this.collection.on("reset", this.addAll());
  },
  addAll: function() {
    this.collection.each(function(model) {
      this.addOne(model)}, this)
  },
  addOne: function(medication) {
    var ul = this.$el.find("ul");
    var itemView = new PillPal.Views.Medication({model: medication});
    ul.append(itemView.render().el)
    },
  render: function () {
    this.$el.html(this.template(this.collection.toJSON()));
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
