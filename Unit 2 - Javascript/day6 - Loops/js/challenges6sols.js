

function challenge1(){
    
var currentNumber = 1;

while(currentNumber<=10){ //change this line
    
console.log('The current number is ' + currentNumber);   
currentNumber = currentNumber + 1;
    
}
console.log('No more numbers!');
}

function challenge2(){

var wantToContinue = true;
    
while(wantToContinue){
wantToContinue = confirm('Do you want to do this again?'); 
}
    
    
}

function challenge3(){
    
var numberLeft = 4;
while(numberLeft >0){
    
alert('You have ' + numberLeft + ' clicks left.');   
    
numberLeft--;    //Here, write a line that decreases numberLeft by 1.
    
}
    
alert("You're out of clicks now. I'm sorry.");
    
}

function challenge4(){
    
var guessedCorrectly = false;
var password = prompt('Please enter the secret word:');
    
while(guessedCorrectly == false){

if(password == 'scabberdinks'){
    
 alert("That's it. Welcome to the club!");
 guessedCorrectly = true;
    
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
    
while(!guessedCorrectly){
if(guess==secretNumber){
 
alert('The number is ' + guess);    
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
    
while(doYouLikeTheColor != true){
    
setBackgroundRGB(Math.round(Math.random()*255),Math.round(Math.random()*255),Math.round(Math.random()*255));
    
doYouLikeTheColor = confirm('Do you want to keep this color?');

    
}
    
}

function challenge7(){
    
for(i=63;i<78;i++){ //Change this line so that it prints out the numbers 63 through 78.
    
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