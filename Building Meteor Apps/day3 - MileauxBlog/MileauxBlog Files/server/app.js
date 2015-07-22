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
  postText:"This can only be seen if you're logged in. Add a new post. Make the title the city where you were born. Make the text a list of 5 random numbers",
  author: "mileaux",
  isPublic:false
}

Meteor.startup(function(){
  
if(Posts.find().count()===0){
  Posts.insert(testPost1);
  Posts.insert(testPost2);
}
  

  
});