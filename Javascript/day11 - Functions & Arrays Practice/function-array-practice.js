function squareArea(side,unit){

var area = side*side;
var areaUnit = unit + '^2';
    
return area + ' '+ areaUnit;
    
}
//Ex:
a = squareArea(3,'m');
b = squareArea(100,'in');

function fullName(firstName,lastName){

return firstName + ' ' + lastName;

}

//Ex:
c= fullName('Andy','Zhou');
d= fullName('Eason','Wu');

function circleInformation(radius){
    
var circleArea = Math.PI*radius*radius;
var circleCircumference = 2*Math.PI*radius;
    
return [circleArea,circleCircumference];

}
//Ex:
e=circleInformation('1');
f=circleInformation('7');


function stringToArray(string){
    
var nameArray= string.split(',');
return nameArray;
    
}
//Ex:
g=stringToArray("hello1,hello2,hello3,hello4,hello5")
h=stringToArray("andy,is,a,cool,student")


function removeSpaces(string){
var splitString = string.split(" ");
var newString = '';    

for(var i = 0;i<splitString.length;i++){
newString+=splitString[i];
}
return newString;
}

//Ex:
i= removeSpaces("This is a sentence without spaces")
j= removeSpaces("This sentence has no spaces")


function dayOfWeek(dayNumber){
    
days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    
var Sunday=0;
var currentDayName = days[dayNumber];

return currentDayName;
}

//Ex:
k=dayOfWeek(5)
l=dayOfWeek(0)


function searchArray(array,element){
foundIndex =-1;
for(var i= 0;i<array.length;i++){
if (array[i]==element){
foundIndex= i;
}
}
return foundIndex;
}

//Ex:
m=searchArray(10)
n=searchArray(9)


var maxArray = function(array){

var max = array[0];
var arraySize = array.length;
    
for(var i=0;i<array.length;i++){
if(array[i]>max){
max = array[i];

}
}
return max;
}
//Ex:
o=maxArray(5)
   
p=maxArray(2)
    

var minArray = function(array){
var min = array[0];
var arraySize = array.length;
    
for(var i=0;i<array.length;i++){
    
if(array[i]<min){
    
    min = array[i];
    
}
    
}
    
return min;
    
}

//Ex:
q=minArray(2);
r=minArray(6);


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
//Ex:
s = isPrime(43255);
t = isPrime(2352354);

