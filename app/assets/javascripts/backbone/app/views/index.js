PillPal.Views.Index = Backbone.View.extend({
  initialize: function() {
   var model = this.model.toJSON()
   function getId(model) {
     if (_.isEmpty(model)) {
      return null
     } else {
      return model.id
     }
   }
   this.user = getId(model)
  },
  templates: {
    navbar: JST["backbone/app/templates/_index_navbar"],
    index: JST["backbone/app/templates/index"]
  },
  events: {
    "click #home_link": "home",
    "click #forum_link": "forum",
    "click #demo_link": "demo",
    "click #profile_link": "profile"
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
  listenForSignin: function() {
    var that = this
    $('body').on('click', '.new_session', function() {
      that.createSession()
    })
  },
  createSession: function() {

  },
  render: function() {
    this.$el.append(this.templates.navbar({user: this.user}))
    $('#content-container').append(this.templates.index);
    return this;
  }
})