Template.posts.helpers({
  
  posts: function(){
   
   return Posts.find();
    
  }
  
});

Template.post.helpers({
  
  canView:function(){
   
   if(this.isPublic){
     
    return true;
     
   }
   else{
     
     if(Meteor.user()){
       
      return true;
       
     }
     else{
       
      return false;
       
     }
     
     
   }
    
  }
  
});

Template.insertPost.events({
  
  'click #submitPost':function(e){
   
   e.preventDefault();
   var title = $("#postTitle").val();
   var postText = $("#postText").val();
   var isPublic = $("#isPrivate").prop('checked');
   var now = new Date();
   var postTime = now.toDateString();
   
   var postObject = {
     
    title:title,
    postText:postText,
    isPublic:isPublic,
    postTime:postTime,
    author:Meteor.user().username
     
   }
   
   console.log(postObject);
   Posts.insert(postObject);
   var title = $("#postTitle").val("");
   var postText = $("#postText").val("");
   var isPublic = $("#isPrivate").prop('checked',true);
    
    
  }
  
});

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});