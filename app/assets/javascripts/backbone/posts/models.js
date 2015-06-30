PillPal.Models.Post = Backbone.Model.extend({
})

PillPal.Models.Posts = Backbone.Collection.extend({
  initialize: function(options){
    this.url = '/posts'
  },
  model: PillPal.Models.Post
})