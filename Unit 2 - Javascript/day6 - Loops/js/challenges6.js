
//challenge1();
//challenge2();
//challenge3();
//challenge4();
//challenge5();
challenge6();
//challenge7();
//challenge8();

function challenge1(){
    
var currentNumber = 1;

while(currentNumber<3){ //change this line so that the program prints out 'No More numbers' after the currentNumber is 30.
    
console.log('The current number is ' + currentNumber);   
currentNumber = currentNumber + 1;
    
}
console.log('No more numbers!');
}

function challenge2(){

var wantToContinue = true;
    
while(wantToContinue){
//Ask the user if they want to continue. Store their response in the variable wantToContinue. 
}
    
    
}

function challenge3(){
    
var numberLeft = 4;
while(false){ //The loop should repeat while the number of clicks is greater than zero.
    
alert('You have ' + numberLeft + ' clicks left.');   
    
;    //Here, write a line that decreases numberLeft by 1.
    
}
    
alert("You're out of clicks now. I'm sorry.");
    
}

function challenge4(){
    
var guessedCorrectly = false;
var password = prompt('Please enter the secret word:');
    
while(guessedCorrectly == false){

if(password == 'scabberdinks'){ //The correct password is scabberdinks. Check 
  
    //alert that the password is correct!
    //Set the guessedCorrectly variable to true so that the loop stops.
    
}
else{
password = prompt("I'm sorry, that's not correct. \n Please enter the secret word.");    
}
    
}
    
}

function challenge5(){
var secretNumber = 12716; //This is your PIN number
    
var guessedCorrectly = false;
var guess = parseInt(prompt('Enter the number you want the computer to guess:'));
    
while(false){ //How can you check if guess is equal to the secret number?
if(guess==secretNumber){
 
alert('The number is ');    //Alert the actual value of the secret number.
guessedCorrectly = true;    
}
    
else{
    
secretNumber++; //What should you do to secretNumber?
    
}
     
}
    
    
}

function challenge6(){
    
var doYouLikeTheColor = false;
setBackgroundRGB(Math.round(Math.random()*255),Math.round(Math.random()*255),Math.round(Math.random()*255));
    
while(false){ //You need to change this condition so that it is true when the user selects 'OK' in the confirm
    
setBackgroundRGB(Math.round(Math.random()*255),Math.round(Math.random()*255),Math.round(Math.random()*255));
    
doYouLikeTheColor = confirm('Do you want to keep this color?');

    
}
    
}

function challenge7(){
    
for(i=1;i<50;i++){ //Change this line so that it prints out the numbers 63 through 78.
    
console.log(i);    
     
}
}

function challenge8(){
       
var firstNumber = 3;
var lastNumber = 20;
    
 //write a for loop here that prints out all of the numbers from firstNumber to lastNumber.
for(i = firstNumber;i<=lastNumber;i++){
    
console.log(i);
    
}
    
}