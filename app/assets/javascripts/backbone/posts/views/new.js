PillPal.Views.PostForm = Backbone.View.extend({
  template: JST["backbone/posts/templates/new"],
  events: {
    'click .button': 'createPost'
  },
  createPost: function(e) {
    var $form = $(event.target)
  console.log($(this.$el.find('input[name]')))
    this.$el.find('input[name]').each(function() {
          // console.log(this.name)
          // console.log(this.value);
            })
    e.preventDefault()
  },
  render: function() {
    this.$el.append(this.template)
    return this;
  }
})