
//challenge1();
//challenge2();
//challenge3();
//challenge4();
//challenge5();
challenge6();
//challenge7();
//challenge8();

//Challenge : Write a for loop that prints out the numbers 1 - 10 squared.
function challenge1(){
 
for(i = 1;i<=10;i++){
    
 console.log(i*i);   
    
}
      
    
}//End of function

//Challenge : Make a for loop that prints out the message "This is #X in the for loop", where X is the loop count.
function challenge2(){
    
var forLoopCounter = 1;
    
while(forLoopCounter<=5){
    
console.log("This is #"+forLoopCounter+" in the while loop");
forLoopCounter++;
    
}
//Put your for loop here    
for(forLoopCounter=1;forLoopCounter<=5;forLoopCounter++){
console.log("This is #"+forLoopCounter+" in the for loop");    
    
}

}//End of function

function challenge3(){
//Challenge : Print out the lyrics to "Happy Birthday" for Mileaux using a for loop and the variables below.  

var birthdayMessage1 = "Happy birthday to you"
var birthdayMessage2 = "Happy birthday dear Mileaux"
for(i=1;i<=4;i++){
    
    if(i==3){
        console.log(birthdayMessage2);
    }
    else{
        
        console.log(birthdayMessage1);   
    }
}

    
}

//Challenge : Print out "The #X is _____ 15" ten times. X should start at 11, and should always be equal to the count number for the loop. The _____ should be replaced with 'less than', 'equal to', or 'more than' according to the value of the count number.
function challenge4(){
for(i=11;i<=21;i++){
var comparison = ''    
if(i<15){
 
comparison = 'less than';    
    
}
else if(i==15){
    
comparison = 'equal to';   
    
}
else{
    
comparison = 'more than'; 
    
}

console.log("The #" + i + " is " + comparison + " 15");
} 
    
}

//Challenge : The nested loop below prints out addition problems for the numbers 1 - 5. Change it into a multiplication table for the numbers 3 - 6.
function challenge5(){

for(outside=3;outside<=6;outside++){

    for(inside = 3;inside<=6;inside++){
     
    console.log(inside + "*" + outside+ "=" + (inside*outside)+'\n');
        
    }
    
}
    
    
}
//Challenge : You're going to create a simple game called 'Fizz-Buzz', which we played in class. This starts with the number 1. 
//If the number is a multiple of 3, you should say 'Fizz'. 
//If the number is a multiple of 5, you should say 'Buzz'. 
//If the number is divisible by both 3 and 5, you should say 'Fizz-Buzz'. 
//Otherwise, just say the number. 
//The number increases by 1 with the next person.
//The correct sequence of responses for the first fifteen numbers is:
//1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz,11,Fizz,13,14,Fizz-Buzz.
//Create a for loop that generates these values for the numbers 1 - 30. This will you require to use an if/else structure, the % operator, and either && or || operators.
function challenge6(){
for(i=1;i<=30;i++){
if(i%3==0 && i%5==0){
    console.log('Fizz-Buzz');
}
else if(i%3==0 && i%5!=0){
    console.log('Fizz');   
}
else if(i%3!=0 && i%5 ==0){
    console.log('Buzz');   
}
else{
    console.log(i);   
}

}
 
}
