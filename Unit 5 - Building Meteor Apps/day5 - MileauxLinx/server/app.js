var startLinks = [
  {linkTitle: "CNN",linkURL: "http://www.cnn.com",linkAddedBy: "mileaux",votes:0},
  {linkTitle: "Hangzhou International School",linkURL: "http://hz.scis-his.net",linkAddedBy: "eweinberg",votes:0}  
  ];


Meteor.startup(function(){
  
  if(Links.find().count()===0){
  startLinks.forEach(function(link){
    
    Links.insert(link);
    
  });
    
    
  } 
  
});