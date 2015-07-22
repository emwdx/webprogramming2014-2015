function getFormNumber(id){
    
var formElement = $(id);

return parseFloat(formElement.val());
    
    
}

function getFormText(id){
 
var formElement = $(id);

return formElement.val();
    
    
}

function setBodyBackground(r,g,b){
if(r!=null && g!=null && b!=null){

$('body').css('background-color','rgb('+r+','+g+','+b+')');   
}
    
else{
    
    $('body').css('background-color',r);
    
}
}

function setElementBackgroundRGB(element,r,g,b){

var selectedElement = $(element);    
$(selectedElement).css('background-color','rgb('+r+','+g+','+b+')');   

}

function setElementBackgroundColor(element,color){

var selectedElement = $(element);    
$(selectedElement).css('background-color',color);   

    
    
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
}