var testPost1 = {
  title: "Test Post 1",
  postTime: "Thursday, March 5th",
  postText:"This is a sample post.",
  author: "eweinberg",
  isPublic:true
}

var testPost2 = {
  title: "Test Post 2",
  postTime: "Thursday, March 5th",
  postText:"This can only be seen if you're logged in.",
  author: "mileaux",
  isPublic:false
}

Meteor.startup(function(){
  
if(Posts.find().count()===0){
  Posts.insert(testPost1);
  Posts.insert(testPost2);
}
  

  
});

