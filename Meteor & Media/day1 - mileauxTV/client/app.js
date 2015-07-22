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