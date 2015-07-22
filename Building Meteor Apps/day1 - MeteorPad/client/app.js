//client only code

Template.responses.helpers({
  
response: function(){
 
/*Do you remember how we did this in making Mongo queries? The database variable is called Responses, which you might have noticed in the common.js file.

Instead of a variable name here, you want to return a Database.find() query.
*/
    
 return "Change the database query"; 
  
}
  
});

Template.main.events({
  
'click #submitButton':function(e){
e.preventDefault();

//Get the name and number from each of the inputs.
    
var submittedName = $("#name").val();
var submittedNumber = $("#number").val();

//Delete this if statement (and the else statement after it) and fix the braces to see what it does.
    
if(submittedName!=='' & submittedNumber !==''){
  
var responseObject = {  
  name: submittedName,
  number: submittedNumber  
}

Responses.insert(responseObject);
    
//What does this line do? Figure this out, and then make it do this completely.

$("#name").val("");
    
}

//If you deleted the if statement above, also delete this else statement.
else{alert("Fill in all information before submitting.");}
  
    
}
  
});


Template.responseItem.helpers({
  
numberSquared: function(){
  
number = this.number;
return number*number
  
}
  
});
