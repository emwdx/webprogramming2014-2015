Template.linkList.helpers({
  
  links: function(){
    
   return Links.find({},{sort:{votes:-1}}); 
    
  }
  
});

Template.linkItem.helpers({
  
  isEMW: function(){
    
   return Meteor.user().username=='eweinberg'; 
    
  }
  
});

Template.addLinks.events({
  'click #submitLink': function(e){
    var linkTitle = $("#linkTitle").val();
    var linkURL = $("#linkURL").val();
    var user = Meteor.user().username;
    
    var linkObject = {
    linkTitle: linkTitle,
    linkURL: linkURL,
    linkAddedBy: user,
    votes:0
    }
    
    Links.insert(linkObject);
    $("#linkTitle").val("");
    $("#linkURL").val("");
    
    
  },
  
 
  
});

Template.linkItem.events({
 
 'click .voteForLink':function(){
   
  var currentVotes = this.votes;
  if(Meteor.user()){
    
   var currentLink = Links.findOne({_id:this._id});
   console.log(currentLink);
   Links.update({_id:currentLink._id},{$inc:{votes:1}});
    
  }
  else{
   alert("Sign in to vote for links!"); 
    
  }
  
   
 },
  'click .deleteLink':function(){
   var currentLink = Links.findOne({_id:this._id});  
   Links.remove({_id:currentLink._id}); 
    
  }
  
  
  
  
});



Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});
