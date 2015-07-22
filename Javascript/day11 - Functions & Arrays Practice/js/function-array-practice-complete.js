
function squareArea(side,unit){

var area = side*side;
var areaUnit = unit + '^2';
    
return area + ' '+ areaUnit;
    
}

//squareArea(3,'in');
//squareArea(5,'meters');

function fullName(firstName,lastName){
    
return firstName + ' ' + lastName;    
    
    
}

function circleInformation(radius){
 
var circleArea = Math.PI*radius*radius; //formula for circle area is Pi*r*r
var circleCircumference = 2*Math.PI*radius; //formula for circle circumference is 2*Pi*r
    
return [circleArea,circleCircumference];
    
}

function stringToArray(string){
    
var nameArray = string.split(',');
return nameArray;
    
    
}

function removeSpaces(string){
    
    
var splitString = string.split(" ");
var newString = '';
    
for(var i = 0;i<splitString.length;i++){
 
    newString+=splitString[i];
    
}

return newString;
     
}

function dayOfWeek(dayNumber){

days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']; //Store the strings for each day in an array  
    
var currentDayName = days[dayNumber];    

return currentDayName;
    
}


function searchArray(array,element){

foundIndex = -1;    
    
for(var i = 0;i<array.length;i++){

if(array[i]==element){
    
foundIndex = i;
    
}
    
}
    
return foundIndex;
    
}


var maxArray = function(array){
    
var max = array[0]; //Set max to the first element of the array
var arraySize = array.length; //arraySize is the number of elements in the array
    
for(var i=0;i<array.length;i++){ //compare each element of the array to the max
    
if(array[i]>max){ //If the current element of the array is greater than max,

    max = array[i];    //Make max equal to the current value of the array

}
    
    
}

return max;    
    
}

var minArray = function(array){
    
var min = array[0]; //Set min to the first element of the array
var arraySize = array.length; //arraySize is the number of elements in the array
    
for(var i=0;i<array.length;i++){ //compare each element of the array to the minimum value
    
if(array[i]<min){ //If the current element of the array is less than min,

    min = array[i];    //Make min equal to the current value of the array

}
    
    
}

return min;    
    
}

function isPrime(number){
numberIsPrime = true;

if(number==1){
return false;

}

else{
for(var i=2;i<=Math.sqrt(number);i++){


if(number%i==0){

numberIsPrime = false;

}
}

return numberIsPrime;

}

}
