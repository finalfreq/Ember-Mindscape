App.Router.map(function() {
  this.resource('questions', {path:'/'});
  this.resource('question', {path:'questions/:question_id'});
  this.resource('new-question');

});
