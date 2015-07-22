Router.configure({
    
   layoutTemplate:"main" 
    
});

Router.route('welcome',{path:'/'});    
Router.route('view',{path:'/view/'}); 


Template.welcome.helpers({
   
    videoFound: function(){
        
     return Videos.find();   
        
    }
    
});

Template.videoThumbnail.events({
   
    'click .videoLink':function(e){
     e.preventDefault();
     Session.set('selectedVideo',this);
     Router.go('/view/');
        
    }
    
});

Template.view.helpers({
    
   selectedVideo:function(){
       
    return Session.get('selectedVideo');   
       
   }
    
});

Template.showComments.helpers({
    
   comment:function(){
       
    return Comments.find();
       
   }
    
});

Template.commentForm.events({
   
    'click #submitVideoComment':function(e){
     e.preventDefault();   
     var commentText = $('#videoComment').val(); //get comment  
     if(commentText!=''){ //as long as comment isn't blank, continue
     var username = Meteor.user().username; //get the username of the current user
     var videoID = Session.get('selectedVideo')._id;
     Comments.insert({commentText:commentText,commentUser:username,videoID: videoID}); //insert the comment into the collection
         
     }
     else{
         alert("Please enter a comment");
     }
     $('#videoComment').val('');    
      }

});

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});