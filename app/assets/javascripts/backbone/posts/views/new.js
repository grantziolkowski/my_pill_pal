PillPal.Views.PostForm = Backbone.View.extend({
  tagName: "form",
  template: JST["backbone/posts/templates/new"],
  initialize: function(options) {
    this.collection = options.collection
  },
  events: {
    'click .button': 'submitForm'
  },
  submitForm: function(e) {
    e.preventDefault()
    var attributes = {}
    $(':input').each(function() {
      if (this.name === "") {
        return
      }
      attributes[this.name] = this.value
      this.value = ""
    })
    this.collection.create(attributes)
    $('#postFormModal').foundation('reveal', 'close')
  },
  render: function() {
    this.$el.append(this.template)
    return this;
  }
})