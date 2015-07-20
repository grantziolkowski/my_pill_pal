PillPal.Views.PostForm = Backbone.View.extend({
  tagName: "form",
  template: JST["backbone/posts/templates/new"],
  events: {
    'click .button': 'createPost'
  },
  createPost: function(e) {
    e.preventDefault()
    var attributes = {}
    $(':input').each(function() {
      if (this.name === "") {
        return
      }
      attributes[this.name] = this.value
    })
    console.log(attributes)
  },
  render: function() {
    this.$el.append(this.template)
    return this;
  }
})