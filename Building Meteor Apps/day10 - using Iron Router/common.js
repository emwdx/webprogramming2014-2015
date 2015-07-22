Posts = new Mongo.Collection("posts");

Posts.allow({
    
insert:function(){
    
 return (Meteor.user())   
    
},
    
remove: function(userId,document){
    
var currentUser = Meteor.users.findOne({_id:userId});
return document.author==currentUser.username;
        
},

update: function(userId,document){
    
var currentUser = Meteor.users.findOne({_id:userId});
return document.author==currentUser.username;
}
    
});