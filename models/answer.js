App.Answer = DS.Model.extend({
  name: DS.attr(),
  body: DS.attr(),
  question: DS.belongsTo('question')

});
