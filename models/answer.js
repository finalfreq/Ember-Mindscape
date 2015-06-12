App.Answer = DS.Model.extend({
  author: DS.attr(),
  body: DS.attr(),
  question: DS.belongsTo('question')

});
