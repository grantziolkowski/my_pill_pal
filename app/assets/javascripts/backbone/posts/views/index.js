PillPal.Views.Posts = Backbone.View.extend({
  templates: {
    header: JST["backbone/posts/templates/_index_header"],
    index: JST["backbone/posts/templates/index"]
  },
  initialize: function() {
    this.collection.on("reset", this.addAll())
  },
  events: {
    'click #add_post_button': 'newPostForm'
  },
  addAll: function() {
    var ul = this.$el.find("#forum_container")
    this.collection.forEach(function(model) {
      ul.append(new PillPal.Views.Post({
        model: model
      }).render().el)
    })
    return this;
  },
  newPostForm: function() {
    newPostFormView = new PillPal.Views.PostForm()
    this.$el.append(newPostFormView.render().el)
    $('#postFormModal').foundation('reveal', 'open')
  },
  render: function() {
    this.$el.append(this.templates.header)
    this.$el.append(this.templates.index)
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

