PillPal.Views.Posts = Backbone.View.extend({
  template: JST["backbone/posts/templates/index"],
  render: function() {
    this.$el.append(this.template(this.collection.toJSON()[0]))
    return this;
  }
})