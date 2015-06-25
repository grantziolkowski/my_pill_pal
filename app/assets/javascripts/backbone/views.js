PillPal.Views.Medications = Backbone.View.extend({
  templates:  {
    header: JST["backbone/templates/medications/_index_header"],
    index: JST["backbone/templates/medications/index"]
  },
  initialize: function() {
    this.username = this.collection.toJSON()[0].user.username
    // this.collection.on("reset", this.render().el)
  },
  events: {
    'click #my_meds_button': 'addAll',
    'click #add_meds_button': 'newMedForm'
  },
  addAll: function() {
    this.$pillList = $("#pill_list")
    this.$calendar = $("#pill_bins")
    $("#my_meds_button").toggle()
    $("#schedule_button").toggle({duration: 1000, queue: false})
    this.collection.map(function(userMedicationModel) {
      if (userMedicationModel.toJSON().day != null) {
        this.addToCalendar(userMedicationModel)
      } else {
        this.addOne(userMedicationModel)
      }
      }, this)
    this.handleDraggables();
    return this;
  },
  addOne: function(medication) {
    var itemView = new PillPal.Views.Medication({model: medication});
    this.$pillList.append(itemView.render().el)
  },
  addToCalendar: function(medication) {
    var itemView = new PillPal.Views.Medication({model: medication});
      this.$calendar.append(itemView.renderCal().el)
  },
  handleDraggables: function() {
    var that = this
    $(".med_buttons").draggable();
    $("#pill_bins").children().droppable({
      drop: function(event, ui){
        var pos = $(this).offset()
        pos.top += 3;
        pos.left -= 50;
        $(ui.draggable).offset(pos);
        var id = ui.draggable[0].dataset.id
        var $pill = $(ui.draggable[0])
        $pill.find("a.button").removeClass("small").addClass("tiny")
        var medModel = that.collection.get(id);
        medModel.save({day: event.target.dataset.day}, {error: function(response){
        }})
      }
    });
  },
  newMedForm: function() {
    var newMedFormView = new PillPal.Views.MedicationForm();
    $('body').on('click', '#medFormStep2', function(e){
      newMedFormView.secondMedForm(e);
    })
    $('body').on('click', '#medFormAddAlias', function(e){
      newMedFormView.addAliasField(e);
    })
    $('body').on('click', '#medFormAddDay', function(e){
      newMedFormView.addDayField(e);
    })
    this.$el.append(newMedFormView.render().el)
    $('#medFormModal').foundation('reveal', 'open')
  },
  render: function () {
    this.$el.append(this.templates.header({name: this.username}))
    this.$el.append(this.templates.index)
    return this;
  }
})

PillPal.Views.Medication = Backbone.View.extend({
  template: JST["backbone/templates/medications/show"],
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.find("a.button").css({"background-color": this.model.toJSON().color})
    return this;
  },
  renderCal: function() {
    this.$el = $("#pill_bins").find("[data-day='" + this.model.toJSON().day + "']");
    this.$el.append(this.template(this.model.toJSON()));
    return this;
  }

})


PillPal.Views.MedicationForm = Backbone.View.extend({
  template: JST["backbone/templates/medications/new"],
  render:function () {
    this.$el.append(this.template)
    return this;
  },
  secondMedForm: function(e) {
    e.preventDefault();
    $('#medFormFirst').toggle();
    $('#medFormSecond').fadeIn();
  },
  addAliasField: function(e) {
    $('#medFormAliasPrompt').hide()
    $("#medFormAliasField").fadeIn()
  },
  addDayField: function(e) {
    $('#medFormDayPrompt').hide()
    $("#medFormSubmit").fadeIn()
  },
})