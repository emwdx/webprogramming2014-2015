function getFormNumber(id){
    
var formElement = $(id);

return parseFloat(formElement.val());
    
    
}

function getFormText(id){
 
var formElement = $(id);

return formElement.val();
    
    
}

function setBackgroundRGB(r,g,b){
    
$('body').css('background-color','rgb('+r+','+g+','+b+')');   
    
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
