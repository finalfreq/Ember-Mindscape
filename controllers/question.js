App.QuestionController = Ember.ObjectController.extend({
  actions: {
      newAnswer: function() {
        $("#myModal").modal('show');
    }
  }
});
