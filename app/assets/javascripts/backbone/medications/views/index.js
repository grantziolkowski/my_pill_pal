PillPal.Views.Medications = Backbone.View.extend({
  templates:  {
    header: JST["backbone/medications/templates/_index_header"],
    index: JST["backbone/medications/templates/index"]
  },
  initialize: function() {
    this.username = this.collection.toJSON()[0].user.username
    this.userId = this.collection.toJSON()[0].user.id
    this.listenTo(this.collection, "reset", this.addOneCalendar)
  },
  events: {
    'click #my_meds_button': 'addList',
    'click #add_meds_button': 'newMedForm'
  },
  addAll: function() {
    this.$pillList = $("#pill_list")
    this.$calendar = $("#pill_bins")
    this.collection.map(function(model) {
      if (model.toJSON().day != null) {
        this.addOneCalendar(model).bind(this)
      } else {
        this.addOne(model)
      }
      }, this)
    this.handleDraggables();
    return this;
  },
  addList: function() {
    $("#my_meds_button").toggle()
    var hiddenEls = [this.$pillList, $("#schedule_button")]
    hiddenEls.forEach(function(el){
      el.toggle({duration: 500, queue: false})
    })
  },
  addOne: function(medication) {
    var itemView = new PillPal.Views.Medication({model: medication});
    this.$pillList.append(itemView.render().el)
    return this;
  },
  addOneCalendar: function(medication) {
    var itemView = new PillPal.Views.Medication({model: medication});
    $('body').append(itemView.renderCal().el)
    return this;
  },
  handleDraggables: function() {
    var that = this

    $("#pill_list li").draggable()
    $("#pill_bins").children().droppable({
      drop: function(e, ui){
        var pos = $(this).offset()
        pos.top += 10;
        $(ui.draggable).offset(pos);
        var id = ui.draggable[0].dataset
        var $pill = $(ui.draggable[0])
        $pill.find("a.button").removeClass("small").addClass("tiny")
        var medModel = that.collection.get(id);
        medModel.save({day: e.target.childNodes[0].dataset.day}, {error: function(response){ }
        })
      }
    });
  },
  newMedForm: function() {
    var newMedFormView = new PillPal.Views.MedicationForm({
      userId: this.userId,
      collection: this.collection
    });
    $('body').on('click', '#medFormStep2', function(e){
      newMedFormView.secondMedForm(e);
    })
    $('body').on('click', '#medFormAddAlias', function(e){
      newMedFormView.addAliasField(e);
    })
    $('body').on('click', '#medFormAddDay', function(e){
      newMedFormView.addDayField(e);
    })
    $('body').on('click', '.create_med', function(e){
      newMedFormView.submitForm(e);
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