function getFormNumber(id){
    
var formElement = $(id);

return parseFloat(formElement.val());
    
    
}

function getFormText(id){
 
var formElement = $(id);

return formElement.val();
    
    
}