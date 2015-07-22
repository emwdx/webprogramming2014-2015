Meteor.subscribe('videos',{},{});
Session.setDefault('selectedVideo', '');
Meteor.subscribe('comments',{videoID:Session.get('selectedVideo')._id},{});

Router.configure({
    
   layoutTemplate:"main",
   loadingTemplate:"loading"
});

Router.route('welcome',{path:'/',
                       
                       waitOn: function(){
                       
                       return Meteor.subscribe('videos');
                       
                       }}); 

Router.route('view',{path:'/view/:_id',
                     data:function(){
                         
                     var currentVideo = Videos.findOne({_id:this.params._id});
                     
                     Session.set('selectedVideo',currentVideo);
                         
                     return currentVideo;
                         
                     }
                     
                     }); 


Template.welcome.helpers({
   
    videoFound: function(){
        
     return Videos.find();   
        
    }
    
});


Template.view.helpers({
    
   selectedVideo:function(){
       
    return Session.get('selectedVideo');   
       
   }
    
});

Template.showComments.helpers({
    
   comment:function(){
       
    return Comments.find({videoID:Session.get('selectedVideo')._id});
       
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