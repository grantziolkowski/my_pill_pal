PillPal.Views.Medications = Backbone.View.extend({
  template: _.template($("#medications").html()),
  initialize: function() {
    this.collection.on("reset", this.addAll())
  },
  addAll: function() {
    var ul = this.$el.find("ul");
    this.collection.each(function() {this.addOne()})
  },
  addOne: function(medication) {
    var itemView = new PillPal.Views.Medication({model: medication});
    ul.append(itemView.render().el)
    },
  render: function () {
    this.$el.html(this.template(this.collection.toJSON()));
    return this;
  }
})

PillPal.Views.Medication = Backbone.View.extend({
  template: _.template($("#medication").html()),
  tagName: "li",
  events: {
    "click a.destroy" : "destroy"
  },
  initialize: function() {
    this.model.on("destroy", this.removeThis())
  },
  destroy: function() {
    this.model.destroy();
  },
  removeThis: function(medication) {
    this.model.remove();
    },
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
})
