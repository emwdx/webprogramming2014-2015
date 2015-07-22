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
