PillPal.Views.Index = Backbone.View.extend({
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
  render: function() {
    this.$el.append(this.templates.navbar);
    $('#content-container').html(this.templates.index);
    return this;
  }
})