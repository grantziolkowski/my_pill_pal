PillPal.Routers.Index = Backbone.Router.extend({
  initialize: function() {
    this.$rootContainer = $('#container')
    this.user = null
  },
  routes: {
    ""       : "root",
    "profile" : "userMedications",
    "forum"   : "forumIndex"
  },
  root: function() {
    this.$rootContainer.empty()
    var that = this;
    index = new PillPal.Models.Index()
    index.fetch()
      .then(function() {
        var indexView = new PillPal.Views.Index({model: index});
        that.$rootContainer.prepend(indexView.renderNav().el)
        that.$rootContainer.append(indexView.render().el)
        })
     .then(loadFoundation)
  },
  userMedications: function(id) {
    this.$container = $('#content-container')
    $('#nav-bar').empty()
    var medications = new PillPal.Models.Medications({userId: id});
    var that = this;
    medications.fetch().then(function(response) {
      var indexView = new PillPal.Views.Index({model: {id: response[0].user.id}});
      that.$rootContainer.replaceWith(indexView.renderNav().el)
      var medsView = new PillPal.Views.Medications({
        collection: medications,
        userId: id});
      that.$container.html(medsView.render().el)
      that.$container.append(medsView.addAll())
    })
  },
  forumIndex: function() {
    this.$container = $('#content-container')
    this.$container.empty()
    var posts = new PillPal.Models.Posts()
    var that = this;
    posts.fetch().then(function() {
      var postsView = new PillPal.Views.Posts({
        collection: posts});
      that.$container.append(postsView.render().el)
      that.$container.append(postsView.addAll())
    })
  }
})

