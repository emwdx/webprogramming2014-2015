//server only code

Meteor.startup(function () {
  if (Responses.find().count() === 0) {
    var names = ["Mr. Weinberg","Mileaux"];
    _.each(names, function (name) {
      Responses.insert({
        name: name,
        number: Math.floor(Random.fraction() * 10) * 5
      });
    });
  }
});