App.QuestionController = Ember.ObjectController.extend({
  actions: {
    newAnswer: function() {
      $("#myModal").modal('show');
    },
    delete: function () {
      if (confirm('Are you sure?')) {
        this.get('model').destroyRecord();
        this.transitionToRoute('questions');
      }

    }

  }
});
