

var schoolIsCancelled = false;
//Challenge 1
//Create an alert that says "School is cancelled" or "School is open", depending on the value of the variable schoolIsCancelled above. 
if(schoolIsCancelled){
    alert("School is cancelled");   
}

else{
    
    alert("School is open")
}

//Challenge 2
//The code below asks the user to enter a number and stores it in the variable number using parseInt(). Enter an expression inside if() below that will print out "That number is bigger than 500" if the number is more than 500, and "That number is less than 100" if it is less than or equal to 500.

var number = parseInt(prompt("Enter a number from 1 - 1000:"))
if(number>500){
    
 console.log("That number is bigger than 500");   
}

else{
console.log("That number is less than or equal to 500");
}


//Challenge 3
//The code below asks the user to enter another number and store the result in userNumber. Enter console.log commands so that the program says 'Even' if the number is even, and 'Odd' if the number is odd. 


var userNumber = prompt('Enter another number');
if(userNumber%2==0){
    console.log("Even");
}

else{
    
    console.log("Odd")
}


//Challenge 4
//Ask the user (using the confirm() command) if they would like to order a cookie. If the user clicks 'OK', the program should alert: "You made a delicious choice."

var response = confirm("Would you like to order a cookie?");
if(response = true){
 alert("You made a delicious choice.");   
}

//Challenge 5
//Ask the user to enter their password. If the password is 'flashdance', you should print 'You're in!' to the console. If the password is anything else, you should print 'Sorry, that password isn't correct.'
var password = prompt("Enter your password:");
if(password = 'flashdance'){
 console.log("You're in!");   
    
}
else{
  console.log("Sorry, that password isn't correct.");     
    
}

//Challenge 6
//The code below picks a random number between 1 and 10 and stores it in the variable randomNumber. Prompt the user to enter a number. If the number is equal to the randomNumber, alert "Yes! The correct number is X" where X is the value of randomNumber. Otherwise, print out "Sorry, the correct number was X", where X is the value of randomNumber.
var randomNumber = Math.round(Math.random()*10)+1;
var guess = parseInt(prompt("Enter a number between 1 and 10"));
if(guess==randomNumber){
 alert("Yes! The correct number is " + guess );     
    
}
else{
 console.log("Sorry, the correct number was " + randomNumber);
    
}

//Challenge 7
//Ask the user how many days it has been since playing basketball. If the response is less than 2, print 'You're a basketball enthusiast!' If the response is between 2 and 5, print 'You only sometimes play basketball'. If the response is more than 5, print 'You must not enjoy basketball at all.'
var daysSince = parseInt(prompt("How many days has it been since you last played basketball?"))
if(daysSince<2){

console.log("You're a basketball enthusiast!");    
    
}
else if(days==2){
 
console.log("You only sometimes play basketball.");    
}
else if(days==3){
 
console.log("You only sometimes play basketball.");    
}
else if(days==4){
 
console.log("You only sometimes play basketball.");    
}
else if(days==5){
 
console.log("You only sometimes play basketball.");    
}
else if(days>5){
    
console.log("You must not enjoy basketball at all.");

}

