PillPal.Views.Medications = Backbone.View.extend({
  template: JST["backbone/templates/medications/index"],
  initialize: function() {
    this.username = this.collection.toJSON()[0].user.username
    this.collection.on("reset", this.addAll())
  },
  events: {
    'click #my_meds_button': 'addAll',
    'click .med_buttons': 'medInfoUrl',
    'click #add_meds_button': 'newMedForm'
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
        var id = ui.draggable[0].dataset.id
        var medModel = that.collection.get(id);
        medModel.save({day: event.target.dataset.day}, {error: function(response){
        }})
      }
    });
  },
  medInfoUrl: function() {
    event.preventDefault();
    link = "/" + $(event.target)[0].href
    router.navigate(link,{trigger: true});
  },
  newMedForm: function() {
    var newMedFormView = new PillPal.Views.MedicationForm();
    console.log(newMedFormView.render().el)
  },
  render: function () {
    this.$el.html(this.template({name: this.username}))
    return this;
  }
})

PillPal.Views.Medication = Backbone.View.extend({
  template: JST["backbone/templates/medications/show"],
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
})

PillPal.Views.MedicationForm = Backbone.View.extend({
  template: JST["backbone/templates/medications/new"],
  render:function () {
    this.$el.append(this.template)
    return this;
  }
})