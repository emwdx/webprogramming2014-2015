//client only code

Template.peopleInformation.helpers({
  people: function () {
    return People.find({}, { sort: {  lastName: 1 } });
  },
  selectedName: function () {
    var player = People.findOne(Session.get("selectedPerson"));
    return player.fullName;
  }
});



Template.player.helpers({
  selected: function () {
    return Session.equals("selectedPerson", this._id) ? "selected" : '';
  },
  isSelected:function(){
   return Session.equals("selectedPerson",this._id); 
  }
});

Template.person.events({
  'click': function () {
    Session.set("selectedPerson", this._id);
  }
});