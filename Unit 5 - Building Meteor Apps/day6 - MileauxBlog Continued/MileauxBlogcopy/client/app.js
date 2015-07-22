Session.set('postFunction','add');

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
    
  },
 isAuthor:function(){
     
  var currentPostAuthor = this.author;
  return currentPostAuthor==Meteor.user().username;
  
     
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
   var postFunction = Session.get('postFunction');
   var currentPost = Session.get('currentPost');
      
   if(postFunction == 'add'){
       
   Posts.insert(postObject);
       
   }
      
   else{
    
    Posts.update({_id:currentPost._id},{$set:postObject}); 
       
   }
      
   var title = $("#postTitle").val("");
   var postText = $("#postText").val("");
   var isPublic = $("#isPrivate").prop('checked',true);
      
   Session.set('postFunction','add');
    
    
  }
  
});

Template.insertPost.helpers({
    
   postFunction: function(){
    
var currentAction = Session.get("postFunction");
if(currentAction=='add'){
 
    return 'Add New';
    
}
else{
    
 return 'Edit';   
    
}
    
},
    
currentTitle:function(){
 return Session.get('currentPost').title;   
    
},

currentPostText:function(){

    return Session.get('currentPost').postText;
    
}
    
});

Template.postButtons.events({
    
   'click .deletePost': function(){
    
    var areYouSure = confirm('Are you sure you want to delete this post?');
    if(areYouSure==true){
        
     Posts.remove({_id:this._id});   
        
    }
    
   },
    
    'click .editPost':function(){
       
    Session.set('postFunction','edit');
    Session.set('currentPost',this);
       
   }
    
});

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});

