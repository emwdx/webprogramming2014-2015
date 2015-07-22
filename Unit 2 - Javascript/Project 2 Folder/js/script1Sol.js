/*
Programmed by:
Date:
Version:

*/

function script1(){
console.log("Script 1 running!");
    
//Code goes below here**********************************************************  
var distance = parseFloat(prompt("Enter the distance traveled in kilometers:"));
var waitTime = parseFloat(prompt("Enter the number of minutes spent in traffic:"));
var myName = prompt("Enter your name:");
var startFee = 11; //All fares start at 11 RMB
var distanceFee = 0;
var timeFee = 0;
    
if(distance<=3){
 distanceFee = 0;   
}
else{
    
distanceFee = 2*distance;   
    
}
    
if(waitTime<10){
  
    timeFee = 0;
    
}

else{
    timeFee = 1.5*waitTime;
}
    
var totalFare = startFee+distanceFee+timeFee; 
var message1 = "Customer Name: " + myName + '\n';
var message2 = "Distance Traveled: " + distance + ' km\n';
var message3 = "Minutes in Traffic: " + waitTime + ' minutes \n';
var message4 = "Total Fare: " + totalFare + ' RMB\n';

alert(message1 + message2 + message3 + message4);
    
var wantToTip = confirm("Would you like to leave a tip?");
if(wantToTip){
var tipAmount = parseFloat(prompt("Enter the tip in RMB: "));
alert("With your " + tipAmount + " RMB tip, the total is " + (totalFare + tipAmount) + " RMB");
    
}
else{
alert('Please pay the driver ' + totalFare + ' RMB');   
    
}
     
//Code goes above here**************************************************************
}