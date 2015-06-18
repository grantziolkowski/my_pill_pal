PillPal.Views.Medications = Backbone.View.extend({
  template: JST["backbone/templates/medications/index"],
  initialize: function() {
    this.collection.on("reset", this.addAll())
  },
  events: {
    'click #my_meds_button': 'addAll',
    'click .med_buttons': 'checkCollection'
  },
  addAll: function() {
    this.$pillList = $("#pill_list")
    $("#my_meds_button").toggle()
    $("#schedule_button").toggle({duration: 1000, queue: false})
    this.collection.map(function(medication) {
      this.addOne(medication)}, this)
    this.handleDraggables();
    return this;
  },
  addOne: function(medication) {
    var itemView = new PillPal.Views.Medication({model: medication});
    this.$pillList.append(itemView.render().el)
  },
  handleDraggables: function() {
    var that = this
    $(".med_buttons").draggable();
    $("#pill_bins").children().droppable({
      drop: function(event, ui){
        var id = ui.draggable[0].dataset.id;
        var medModel = that.collection.get(id);
        medModel.set({day: event.target.dataset.day});
        var user_id = medModel.attributes.user_id
        console.log(user_id)
        medModel.save({day: event.target.dataset.day}, {wait: true})
      }
    });
  },
  checkCollection: function() {
    event.preventDefault();
  },
  render: function () {
    this.$el.html(this.template())
    return this;

  }
})

PillPal.Views.Medication = Backbone.View.extend({
  template: JST["backbone/templates/medications/show"],
  tagName: "li",
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
})
