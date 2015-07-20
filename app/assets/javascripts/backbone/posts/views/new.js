PillPal.Views.PostForm = Backbone.View.extend({
  tagName: "form",
  template: JST["backbone/posts/templates/new"],
  events: {
    'click .button': 'createPost'
  },
  createPost: function(e) {
    e.preventDefault()
    var attributes = {}
    $('input[name]').each(function() {
      attributes[this.name] = this.value
    })
  },
  render: function() {
    this.$el.append(this.template)
    return this;
  }
})