PillPal.Views.PostForm = Backbone.View.extend({
  template: JST["backbone/posts/templates/new"],
  events: {
    'click .button': 'createPost'
  },
  createPost: function(e) {
    e.preventDefault()
    console.log("in")
  },
  render: function() {
    this.$el.append(this.template)
    return this;
  }
})