//Challenge 1 
var sayHello = function(name){
    
console.log('Hello, '+ name)
    
} //end of function

sayHello('Mr. Weinberg')//This line says hello to Mr. Weinberg.
//Call the function sayHello again, but using the name 'Mileaux'
sayHello('Mileaux');

//Challenge 2 - change the value of twiceNumber so that the function correctly prints out twice the input. Check the console to see if it prints out the correct information.

var twice = function(number){

    var twiceNumber = 2*number;
    console.log('Twice ' + number + ' is ' + twiceNumber);      
    
} //end of function

twice(3);
twice(7);

//Challenge 3 - add messages in the commented lines to make the function say whether a number is even or odd.
var isEven = function(number){
    
if(number%2==0){
    
    //print out 'XX is even' here, where XX is the number
 console.log(number+' is even');   
}
    
else{
    
    //print out  'XX is odd' here, where XX is the number
 console.log(number+' is odd');   
}
    
} //end of function

isEven(7);
isEven(8);

//Challenge 4 - fix the function so that it squares the input number, and then print out the result to the console.
var square = function(number){
    
 var squared = number*number;
 
console.log(squared);
    
 return squared;
    
} //end of function
square(25);

//Challenge 5 - Write a function that adds five to the input number, prints out the result, and returns the value.
var addFive = function(number){

var numberPlusFive = number + 5;
console.log(numberPlusFive);//add your code here    
return numberPlusFive;
    
} //end of function

addFive(3);

//Challenge 6 - write a function that takes the first letter of the input name, and alerts 'The first letter in that name is X' where X is the correct first letter. Call this function using the name 'Mileaux'.
var firstLetter = function(name){
    
alert('The first letter in that name is ' + name.charAt(0));  //write your alert here.  
    
}

firstLetter('Mileaux');

//Challenge 7 - Write a function that takes in two numbers, firstNumber and secondNumber. If firstNumber is greater than secondNumber, print out 'XX is greater than YY' where XX and YY are the first and second numbers. If first Number is less than secondNumber, print out 'XX is less than YY' where XX and YY are the first and second numbers. If the numbers are equal, print out 'The two numbers are both equal to ZZ', where ZZ is the value both numbers equal. 

var compareNumbers = function(firstNumber, secondNumber){
 if(firstNumber>secondNumber){
  console.log(firstNumber + " is greater than " + secondNumber);   
 }
 else if(firstNumber<secondNumber){
  console.log(firstNumber + " is less than " + secondNumber);   
 }
 else{
  console.log("The two numbers are both equal to " + firstNumber);   
 }
    
    
    
}

compareNumbers(102,515);
compareNumbers(301,205);
compareNumbers(203,203);