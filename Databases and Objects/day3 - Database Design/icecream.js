
'click #submit':function(e){
e.preventDefault();
var flavor = $("#flavor").val();
var grade = $("#grade").val();
var house = $("#house").val();
var gender = $("#gender").val();
var name = $("#name").val();
var newDocument={name:name,grade:grade,house:house,gender:gender,flavor:flavor};
Votes.insert(newDocument);
