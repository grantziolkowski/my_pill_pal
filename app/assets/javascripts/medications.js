$(function () {
  window.router = new App.MedicationsRouter()
  Backbone.History.start()
})

var App.MedicationsRouter = Backbone.Router.extend({
  routes: {
    "" : "listMedications"
  },
  listMedications: function() {
    var medications = new App.Models.Medications;
    medications.fetch();
    var collectionView = new App.Views.Medications({
      collection: medications});
    $("#sidebar").html(collectionView.render().el)
  }
})

var App.Views.Medications = Backbone.Router.extend({
  template: _.template($("#medications").html()),
  initialize: function() {
    this.collection.on("reset", this.addAll())
  },
  addAll: function() {
    var ul = this.$el.find("ul");
    this.collection.each(function() {this.addOne()})
  },
  addOne: function(medication) {
    var itemView = new App.Views.Medication({model: medication});
    ul.append(itemView.render().el)
    },
  render: function () {
    this.$el.html(this.template(this.collection.toJSON()));
    return this;
  }
})

var App.Views.Medications = Backbone.View.extend({
  template: _.template($("#medication").html()),
  tagName: "li",
  events:
    "click a.destroy" : "destroy"
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

var App.Models.Medication = Backbone.Model.extend({

})

var App.Models.Medications = Backbone.Collection.extend({
  model: App.Models.Medication,
  url: ''
})