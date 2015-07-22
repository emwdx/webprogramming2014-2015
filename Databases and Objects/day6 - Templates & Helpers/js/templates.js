flights = [
    {leavingFrom: "Hangzhou, China",
     destination: "Shanghai, Pudong",
     departureTime:"8:00 AM",
     arrivalTime:"9:00 AM",
     price:871,
     specialInstructions:"None",
    },
    {leavingFrom: "Hangzhou, China",
     destination: "Tokyo, Japan",
     departureTime:"10:30 AM",
     arrivalTime:"1:00 PM",
     price:2215,
     specialInstructions:"No baggage on this flight - bring a toy to pass the time.",
    },
    {leavingFrom: "Hangzhou, China",
     destination: "Bangkok, Thailand",
     departureTime:"9:35 AM",
     arrivalTime:"11:55 AM",
     price:955,
     specialInstructions:"Flight includes complimentary coconut-flavored bacon bone.",
    },
    {leavingFrom: "Hangzhou, China",
     destination: "Shenzhen, China",
     price:255,
     departureTime:"2:00 PM",
     arrivalTime:"4:30 PM",
     specialInstructions:"None",
    },
    {leavingFrom: "Hangzhou, China",
     destination: "Sydney, Australia",
     departureTime:"8:00 PM",
     arrivalTime:"4:45 AM",
     price:5115,
     specialInstructions:"Rules for dogs are different in the Southern hemisphere. Read our website for details.",
    }
]

Template.navbar.helpers({ 
    
username: function(){
 var userData = {username:"mileauxLuvsBaconBones",email:"mileaux@mileaux.com",fullName: "Mileaux Boudberg"}   
 return userData.fullName;
}
});
Template.navbar.email = function(){

    return "mileaux@mileaux.com";
    
}



Template.mainContent.helpers({

    flights: function(){return flights}
    
});




insertFlight = function(flight){
 var templateInstance = UI.renderWithData(Template.flight,flight);

var lastNode = $('#flightList')[0];
UI.insert(templateInstance,lastNode);    
}
