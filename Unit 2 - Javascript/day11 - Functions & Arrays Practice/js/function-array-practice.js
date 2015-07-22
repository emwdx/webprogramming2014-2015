
function squareArea(side,unit){

var area = side*side;
var areaUnit = unit + '^2';
    
return area + ' '+ areaUnit;
    
}

a = squareArea(3,'in');
b = squareArea(4,'m');

function fullName(firstName,lastName){
    
return firstName + ' ' + lastName;    
    
    
}

function circleInformation(radius){
 
var circleArea = Math.PI*radius*radius; //formula for circle area is Pi*r*r
var circleCircumference = 2*Math.PI*radius; //formula for circle circumference is 2*Pi*r
    
return [circleArea,circleCircumference];
    
}