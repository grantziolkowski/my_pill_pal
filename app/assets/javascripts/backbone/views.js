PillPal.Views.Medications = Backbone.View.extend({
  templates:  {
    header: JST["backbone/templates/medications/_index_header"],
    index: JST["backbone/templates/medications/index"]
  },
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
    var that = this
    $('body').on('click', '#medFormStep2', function(e){
      that.secondMedForm(e);
    })
    var newMedFormView = new PillPal.Views.MedicationForm();
    this.$el.append(newMedFormView.render().el)
    $('#medFormModal').foundation('reveal', 'open')
  },
  secondMedForm: function(e) {
       e.preventDefault();
      $('#medFormFirst').toggle();
      $('#medFormSecond').fadeIn();
  },
  render: function () {
    this.$el.html(this.templates.header({name: this.username}))
    this.$el.append(this.templates.index)
    return this;
  }
})

PillPal.Views.Medication = Backbone.View.extend({
  template: JST["backbone/templates/medications/show"],
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.css({"background-color": this.model.toJSON().color})
    return this;
  }
})

PillPal.Views.MedicationForm = Backbone.View.extend({
  template: JST["backbone/templates/medications/new"],
  render:function () {
    this.$el.html(this.template)
    return this;
  },
  events: {
    'click #medFormAlias':'addInputField'
  },
  addInputField: function() {

  }
})