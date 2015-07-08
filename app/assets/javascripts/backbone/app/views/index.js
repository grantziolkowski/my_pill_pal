PillPal.Views.Index = Backbone.View.extend({
  initialize: function() {
   var model = this.model.toJSON()
   var id = function(model) {
     if (_.isEmpty(model)) {
      return null
     }
   }
   this.user = id()
  },
  templates: {
    navbar: JST["backbone/app/templates/_index_navbar"],
    index: JST["backbone/app/templates/index"]
  },
  events: {
    "click #home_link": "home",
    "click #forum_link": "forum",
    "click #demo_link": "demo",
    "click #profile_link": "profile",
    "click .signin_out_link": "handleSignInOut"
  },
  home: function(e) {
    e.preventDefault();
    window.router.navigate("", {trigger: true});
  },
  forum: function(e) {
    e.preventDefault();
    window.router.navigate("forum", {trigger: true});
  },
  profile: function(e) {
    e.preventDefault();
    window.router.navigate("profile", {trigger: true});
  },
  handleSignInOut: function(e) {
    e.preventDefault();
    console.log("gotcha")
  }
  render: function() {
    console.log(this.user)
    this.$el.append(this.templates.navbar({user: this.user}))
    $('#content-container').html(this.templates.index);
    return this;
  }
})