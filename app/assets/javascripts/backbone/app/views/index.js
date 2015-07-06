PillPal.Views.Index = Backbone.View.extend({
  template: JST["backbone/app/templates/_index_navbar"],
  events: {
    "click #profile_link": "profile"
  },
  profile: function() {
    event.preventDefault();
    window.router.navigate("profile", {trigger: true});
  },
  render: function() {
    this.$el.prepend(this.template);
    return this
  }
})