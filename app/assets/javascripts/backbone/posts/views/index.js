PillPal.Views.Posts = Backbone.View.extend({
  tagName: "ul",
  template: JST["backbone/posts/templates/index"],
  addAll: function() {
    var ul = this.$el
    this.collection.forEach(function(model) {
      ul.append(new PillPal.Views.Post({
        model: model
      }).render().el)
    })
    return this;
  },
  render: function() {
    this.$el.append(this.template())
    // this.$el.append(this.addAll())
    return this
  }
})

PillPal.Views.Post = Backbone.View.extend({
  tagName: "li",
  template: JST["backbone/posts/templates/show"],
  render: function() {
    this.$el.append(this.template(this.model.toJSON()))
    return this;
  }
})

