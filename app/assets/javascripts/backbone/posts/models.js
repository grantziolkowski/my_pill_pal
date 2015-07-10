PillPal.Models.Post = Backbone.Model.extend({
})

PillPal.Models.Posts = Backbone.Collection.extend({
  url: '/posts',
  model: PillPal.Models.Post
})