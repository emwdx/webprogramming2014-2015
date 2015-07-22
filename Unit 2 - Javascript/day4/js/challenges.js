
//Remove the forward slashes to test your answers one at a time.

challenge1();
//challenge2();
//challenge3();
//challenge4();
challenge5();
//challenge6();
//challenge7();
//challenge8();


//Challenge 1
//Enter expressions in the parentheses to identify if a number is less than 3, between 3 and 5, or more then 5.

function challenge1(){
    
var yourGuess = parseInt(prompt("Enter a number:"));

if(){ //Enter an expression here
    
    console.log("Your number is less than 3");
    
}

else if( ){ //Enter an expression here
 
    console.log("Your number is between 3 and 5");
    
}

else{
    
    console.log("Your number is more than 5");
    
}
    
}

//Challenge 2
//This code tests whether the variable yourNumber divides into 3 or 5. 
//If the number is divisible by both, print out "Your number is divisible by 3 and 5." to the console.
//If the number is only divisible by 3, print out "Your number is divisible by 3, but not 5." to the console.
//If the number is only divisible by 5, print out "Your number is divisible by 5, but not 3" to the console.
//If the number isn't divisible by either one, print out "Your number is not divisible by 3 or 5."

function challenge2(){
    
var yourNumber = parseInt(prompt("Enter any number:"))
if(yourNumber%3==0 && yourNumber%5==0){
 
    console.log(); //Enter a message here
    
    
}
else if(yourNumber%3==0 && yourNumber%5!=0){
    
    console.log(); //Enter a message here
    
}

else if(yourNumber%3!=0 && yourNumber%5==0){
 
    console.log(); //Enter a message here
    
}

else{
    
    console.log(); //Enter a message here
    
}
    
}

//Challenge 3
//Enter a conditional expression that tests whether the first letter of a word is a vowel (A,E,I,O, or U). The messages have already been written for you.

function challenge3(){
    
var yourWord = prompt('Enter a word');
var firstLetter = yourWord.charAt(0);

if(){ //Enter your expression on this line.
 
    alert('Your word starts with a vowel (A,E,I,O,U)');
    
}

else{
 
    alert('Your word does not start with a vowel.');
    
}

}


//Challenge 4
//If the user answers yes to both questions, print out "You might be Mr. Weinberg or Mrs. Mullen."
//If the user answers yes to teaching science, but no to teaching math, print out "You are Mr. Fox or Mr. Haag."
//If the user answers no to teaching science, but yes to teaching math, print out "You are Mr. Deerwester."
//If the user answers no to both questions, print out "You are Mrs. Rooth or Ms. Payne."

function challenge4() {
var teachScience = confirm("Do you teach science?");
var teachMath = confirm("Do you teach math?");

if(teachScience){
    
    if(teachMath){
       
        
    }
    
    else{
        
        
        
    }
    
}

else{
    
    if(teachMath){
        
       
    }
    
    else{
       
        
    }
    
    
    
}
    
}

//Challenge 5
//If the user enters either blue or green, alert "You like the same color as Mr. Weinberg!". Otherwise, alert "That color is nice. It isn't as nice as blue or green." .

function challenge5(){
    
var myColor = prompt("What is your favorite color?");
if(){
 
    alert("You like the same color as Mr. Weinberg!");
    
}

else{
 
    alert("That color is nice. It isn't as nice as blue or green.");
    
}
    
}

//Challenge 6
//Write a program that tells the user which advisor they have based on the grade that is entered. The first is done for you.
//These are the grades: Grade 6 - Mr. Sanchez & Mr. Mullen
//Grade 7 - Mr. Haag & Mr. Hoversen
//Grade 8 - Mr. Deerwester & Mrs. Gemmell
//Grade 9 - Mrs. Mullen & Mr. Searle
//Grade 10 - Mr. Fox & Mrs. Rooth
//Grade 11 - Ms. Payne
//Grade 12 - Mr. Weinberg

function challenge6(){
    
var myGrade = parseInt(prompt("Enter your grade:"));
if(myGrade==6){
    console.log("Your advisor is Mr. Mullen or Mr. Fox.");
    
}
else if(){
   
    
}

}

//Challenge 7
//The day of the week is stored in the variable dayOfWeek. 0 is Sunday, 6 is Saturday.
//If the day of the week is either Sunday or Saturday, print out "It's the weekend - sleep as late as you want!". Otherwise print "Today is a school day." to the console.

function challenge7(){
    
var today = new Date()
var dayOfWeek = today.getDay();
    
    
    
//your code goes here.    
    
    

}

//Challenge 8
//The computer picks a random number between 1 and 20. The user enters a number to try to guess what the computer picked. 
//Enter conditions in the parentheses that match the messages.

function challenge8(){
    
var myNumber = Math.round(Math.random()*20)+1; //This is the computer's number you are trying to guess.
var guessedCorrectly = false;
while(!guessedCorrectly){
    
myGuess = parseInt(prompt("Try to guess my number. It is between 1 and 20:"));
if(){ //Enter a condition here inside the parentheses
 
alert('Your guess is too high. Guess again!');    
    
}
else if(){ //Enter another condition here inside the parentheses
    
alert('Your guess is too low. Guess again!');    
    
}
    
else{
    
alert('You guessed it! The number was '+myGuess);
guessedCorrectly = true;
    
}
    
    
}
    
}