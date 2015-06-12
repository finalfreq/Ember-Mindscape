App.QuestionsController = Ember.ArrayController.extend ({
  actions: {
    add: function() {
      $("#addModal").modal('show');
    }
  }
});
