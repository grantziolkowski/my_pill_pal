PillPal.Routers.Index = Backbone.Router.extend({
  initialize: function() {
    this.$container = $('#content-container')
  },
  routes: {
    ""       : "root",
    "profile" : "userMedications",
    "forum"   : "forumIndex"
  },
  root: function() {
    this.$container.empty()
    var indexView = new PillPal.Views.Index();
    $('#nav_bar').html(indexView.render().el)
  },
  userMedications: function(id) {
    this.$container.empty()
    var medications = new PillPal.Models.Medications({userId: id});
    var that = this;
    medications.fetch().then(function() {
      var medsView = new PillPal.Views.Medications({
        collection: medications});
      that.$container.append(medsView.render().el)
      that.$container.append(medsView.addAll())
    })
  },
  forumIndex: function() {
    this.$container.empty()
    var posts = new PillPal.Models.Posts()
    var that = this;
    posts.fetch().then(function() {
      var postsView = new PillPal.Views.Posts({
        collection: posts});
      that.$container.append(postsView.render().el)
      // that.$container.html(postsView.addAll())
    })
  }
})

