App.QuestionController = Ember.ObjectController.extend({
  actions: {
    newAnswer: function() {
      $("#myModal").modal('show');
    },
    delete: function() {
      if (confirm('Are you sure?')) {
        this.get('model').destroyRecord();
        this.transitionToRoute('questions');
      }
    },
    deleteAnswer: function(answer) {
      var question = this.get('model');
      question.get('answers').removeObject(answer)
      question.save();
      answer.destroyRecord();

    },
    edit: function() {
      $("#editModal").modal('show');
    },
    save: function() {
    this.get('model').save();
    }
  }
});
