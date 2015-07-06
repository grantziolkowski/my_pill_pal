PillPal.Views.Index = Backbone.View.extend({
  template: JST["backbone/app/templates/_index_navbar"],
  render: function() {
    this.$el.prepend(this.template);
    return this
  }
})