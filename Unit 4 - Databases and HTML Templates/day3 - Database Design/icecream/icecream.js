//Delete all code in /server/app.js

//Copy the line below into common.js on MeteorPad
Votes = new Meteor.Collection('votes');

//Copy all code below this line into /client/app.js
Template.form.events({
    'click #submit':function(e){
e.preventDefault();
var flavor = $("#flavor").val();
var grade = $("#grade").val();
var house = $("#house").val();
var gender = $("#gender").val();
var name = $("#name").val();
var newDocument={name:name,grade:grade,house:house,gender:gender,flavor:flavor};
Votes.insert(newDocument);
$("#flavor").val("");
$("#grade").val("");
$("#house").val("");
$("#gender").val("");
$("#name").val("");
    }
  });
    
Template.results.helpers({
data: function(){return Votes.find({})}

    
});
                    

