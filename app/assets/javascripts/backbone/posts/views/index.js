PillPal.Views.Posts = Backbone.View.extend({
  templates: {
    header: JST["backbone/posts/templates/_index_header"],
    index: JST["backbone/posts/templates/index"]
  },
  initialize: function() {
    this.collection.on("change", this.addAll, this)
  },
  events: {
    'click #add_post_button': 'newPostForm'
  },
  addAll: function() {
    var ul = $(this.$el).find("#forum_container")
    ul.empty()
    this.collection.forEach(function(model) {
      ul.append(new PillPal.Views.Post({
        model: model
      }).render().el)
    })
    return this;
  },
  newPostForm: function() {
    newPostFormView = new PillPal.Views.PostForm({collection: this.collection})
    this.$el.append(newPostFormView.render().el)
    $('#postFormModal').foundation('reveal', 'open')
    $('body').on('click', '#create_post', function(e){
      newPostFormView.submitForm(e);
    })
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

