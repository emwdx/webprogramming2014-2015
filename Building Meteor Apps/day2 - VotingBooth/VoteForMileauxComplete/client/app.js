
Template.votingButtons.events({
  
  'click .voteButton':function(e){
   e.preventDefault();
   
   var voterName = $("#name").val();
   var currentVote = $(e.target).html();
   
  if(voterName!==''){
   var voteObject = {
   name: voterName,
   vote: currentVote     
   }
   
   Votes.insert(voteObject);
   $("#name").val("");
   Session.set("hasVoted",true);
   
  }
  else{
    
   alert("Please fill in your name!"); 
  }
   
    
  }
   
    
  
});

Template.votingButtons.helpers({
  
  hasVoted: function(){
    
   return (Session.get("hasVoted")===true);
    
    
  }
  
});


Template.footer.helpers({
  
  votesForA: function(){
    
   return Votes.find({vote:"A"}).count(); 
    
  },
  votesForB: function(){
    
   return Votes.find({vote:"B"}).count(); 
    
  },
  votesForC: function(){
    
   return Votes.find({vote:"C"}).count(); 
    
  },
  hasVoted: function(){
    
   return (Session.get("hasVoted")===true);
    
    
  }
  
  
  
});


