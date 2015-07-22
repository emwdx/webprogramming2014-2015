buildColorBar();

//This function runs any time a key is pressed in the input box with id of 'color-list'
$('#color-list').on('keydown',function(e){

buildColorBar(); //This function builds the bar from the text in the input box, and is called whenever the key is pressed
    
});

function removeBoxes(){
    
 $('.color').remove(); //Clears out all of the colored boxes   
    
}


function buildColorBar(){
   
removeBoxes(); //Removes all boxes from the page
    
var colorText = getFormText('#color-list'); //Gets the text inside the input box
    
var spacesRemoved = removeSpaces(colorText); //Takes spaces out of the text inside the box
    
var colorsArray = stringToArray(spacesRemoved); //Makes an array of all of the colors typed into the input box
    
setColorsFromArray(colorsArray); //Makes a box for each color in the array    
     
}

function setColorsFromArray(colors){
    
for(i=0;i<colors.length;i++){
//For each color named in the array...
    
addColorBox(i,colors[i]);    //Create a box of that color
    
}
        
}

function addColorBox(id,color){
var divString1 = '<div class = "color" id = "color'
var divIndex = id;
var divString2 = '"></div>';

var newDiv = divString1+divIndex+divString2;

$('#color-container').append(newDiv);
$('#color'+divIndex).css({'background-color':color});    
        
}
