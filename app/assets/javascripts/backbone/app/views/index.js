PillPal.Views.Index = Backbone.View.extend({
  template: JST["backbone/app/templates/_index_navbar"],
  events: {
    "click #forum_link": "forum",
    "click #demo_link": "profile",
    "click #profile_link": "demo",
    "click .signin_out_link": "handleSignInOut"
  },
  profile: function(e) {
    e.preventDefault();
    window.router.navigate("profile", {trigger: true});
  },
  forum: function(e) {
    e.preventDefault();
    window.router.navigate("forum", {trigger: true});
  },
  render: function() {
    this.$el.prepend(this.template);
    return this
  }
})