var messages = [ {username:"Mileaux",imageURL:"img/mileaux1.jpg",messageText:"So what do you guys want to eat for dinner tonight?"},
{username:"MrWeinberg",imageURL:"img/emw.jpg",messageText:"How in the world did you get onto the computer?"},
{username:"MsJosie",imageURL:"img/josie.jpg",messageText:"You bought him that new phone that works for people with no thumbs, remember?"},
{username:"Mileaux",imageURL:"img/mileaux1.jpg",messageText:"Yeah, this thing works really well. So, dinner?"},
{username:"PuppyMileaux",imageURL:"img/mileaux2.jpg",messageText:"I'm always up for bacon bone."},
{username:"Mileaux",imageURL:"img/mileaux1.jpg",messageText:"How did puppy-me get an account here? You have to be at least 2 years old."},
{username:"MrWeinberg",imageURL:"img/emw.jpg",messageText:"You wrote this thing, so you tell me."}
];

messagesReactive = new ReactiveVar(messages);

numberOne = ReactiveVar(0);
numberTwo = ReactiveVar(0);


Template.twoNumbers.helpers({
    
    sum: function(){
     
     var a = numberOne.get();
     var b = numberTwo.get();
       
     return a+b;   
    },
    
    product: function(){
     var a = numberOne.get();
     var b = numberTwo.get();
           
    return a*b;    
    },
    difference: function(){
    var a = numberOne.get();
     var b = numberTwo.get();
          
    return a-b;
        
    },
    quotient: function(){
     var a = numberOne.get();
     var b = numberTwo.get();
         
     return a/b;   
    }
    
    
});

Template.twoNumbers.events({
    
   'change #numberOneInput': function(e){
    var currentValue = parseInt($('#numberOneInput').val());
    numberOne.set(currentValue);
       
   },
    'change #numberTwoInput': function(e){
    var currentValue = parseInt($('#numberTwoInput').val());
    numberTwo.set(currentValue);
       
   }
    
    
});


Template.chatRoomHeader.helpers({ 
    
roomName: function(){
    
    return "Bacon Bone Haven";
    
}
});

Template.chatMessages.helpers({
    
   messages: function(){
    var currentMessages = messagesReactive.get();
       return currentMessages;
       
   }
    
});



Template.chatMessageEntry.events({
    
'click #chatSendMessage':function(e){
e.preventDefault();
var messageText = $("#chatMessageText").val();
var newMessageObject = {
messageText:messageText,
username:"AnonymousUser",
imageURL:"img/user.jpg"    
    
}  

insertNewMessage(newMessageObject);
$("#chatMessageText").val('');

}
    
});

insertNewMessage = function(newMessageObject){
var currentMessages= messagesReactive.get();
messagesReactive.set(currentMessages.concat([newMessageObject]));
    
    
}