

var number = 7;
var text1 = 'Twice the value of the variable number is';
//Challenge 1
//Write code that prints 'Twice the value of number is ##' where ## is the actual value of number. Use the variables number and text1 above to do this!
console.log('Twice the value of the variable number is ' + 2*number);



var messageOne = 'MileauxNet v3.1 Login'
var messageTwo = 'username:'
//Challenge 2
//Write code that prints out 'MileauxNet v3.1 Login', a new line, and then the text 'username:' using the variables above.
console.log(messageOne + '\n'+ messageTwo);


//Challenge 3
//Write code that stores a person's mass in kilograms in a variable called mass. Make a second variable that contains a calculation for the person's weight in pounds using the variable mass. Print out this weight to the console. Note: 1 kg has a weight of 2.2 pounds.
var mass = 73
var pounds = 2.2*mass
console.log(pounds + ' pounds')

var firstWord = 'banana'
//Challenge 4
//Alert the user with the message 'The first letter of XXXX is Y' where XXXX is the string in the variable firstWord, and Y is the first letter of firstWord. This should work no matter what string is stored in firstWord!
alert('The first letter of ' + firstWord + ' is ' + firstWord.charAt(0));

//Challenge 5
//Write code that asks the user for their name, and then prints out 'Hello, XXXXX' where XXXXX is the name that was entered.
var userName = prompt('What is your name?')
alert('Hello, ' + userName)

//Challenge 6
//Write code that asks the user for two numbers, and then gives an alert that says "The value of the two numbers multiplied together is ###" where ### is the product of the two numbers.
//Remember that you will need to use parseInt() or parseFloat() to get this to work correctly.
var number1 = prompt('Enter a number');
var number2 = prompt('Enter another number');
var product = parseInt(number1)*parseInt(number2);
alert("The value of the two numbers multiplied together is " + product);



//Challenge 7
//Write code that asks the user for their age, name, and favorite color. Use three separate prompt() calls. Store the values in variables called age, name, and favoriteColor. 
//Then print out a string to the console that says 'Hi XXXX! You are YYYY years old and like the color ZZZZ', with XXXX, YYYY, and ZZZZ replaced by the values of name, age, and favoriteColor.
var age = prompt("What is your age?");
var name = prompt("What is your name?");
var favoriteColor = prompt("What is your favorite color?");

console.log("Hi "+ name + "! You are "+ age + " years old and like the color " + favoriteColor);



//Challenge 8
//Prompt the user for their mass in kilograms. Make an alert that says "XXX kilograms has a weight of YYY pounds", where YYY is the mass in kg converted to pounds. Challenge #2 above might help you with this.

var kilograms = prompt('Enter your mass in kilograms:');
var pounds = parseFloat(kilograms)*2.2;
alert(kilograms + " kilograms has a weight of " + pounds + " pounds");


//Challenge 9
//Prompt the user to enter in a string. Alert the user with the message 'Your string had X characters', where X is the number of characters in the string that was entered.
var myString = prompt("Enter in a string of characters");
var stringLength = myString.length;
alert("Your string had "+stringLength+ " characters");


var rightNow = new Date()
//Challenge 10
//By typing in the variable rightNow, and then a '.', a bunch of options come up for operations you can do on the variable. See if you can figure out what rightNow.getDay() and rightNow.getMonth() do. Then print out a strong that says 'This is the Xth day of the week, and the Yth month of the year', where X and Y are the correct values for today.
var dayOfWeek = rightNow.getDay()+ 1;
var monthOfYear = rightNow.getMonth() + 1;
console.log('This is the '+ dayOfWeek + 'th day of the week, and the '+ monthOfYear + 'th month of the year')




