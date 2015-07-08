PillPal.Views.PostForm = Backbone.View.extend({
  template: JST["backbone/posts/templates/new"],
  render:function () {
    this.$el.append(this.template)
    return this;
  }
})