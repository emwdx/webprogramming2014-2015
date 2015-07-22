

Warm up - complete the code below to alert the correct message for the name 'mileaux'.

var myDog = 'mileaux';
var dogLength = myDog.length
if(dogLength>6){

alert("Your dog's name has more than six letters!");

}

else{

alert("Your dog's name has six or fewer letters in it.");

}

Show examples of AND operator and OR operator - make a truth table

true && true
true && false
false && true
false && false


true || true
true || false
false || true
false || false


a = 6;
(a>3) && (a < 8)

(a%6 ==0) || (a == 1)

var teacher = 'indahl'

if(teacher == 'indahl' || teacher == 'vandereyken'){

console.log('HIS Administrator')

}

else{

console.log('Just a teacher')

}

var currentTemp = parseInt(prompt('Enter the temperature:'));

if(currentTemp < 15){

alert ("It's cold!");

}

else if (currentTemp >= 13 && currentTemp < 26){

alert("It's a comfortable temperature.");
}
else{

alert("It is hot!");

}


cold and sweet: ice cream
cold and not sweet: frozen peas
not cold and sweet: apple pie
not cold and not sweet: pizza

var isCold = confirm("Is the food cold?");
var isSweet = confirm("Is the food sweet?" );

if(isCold){
    if(isSweet){
    alert('ice cream');
  }
    else{
    alert('frozen peas');
    }
}

else{
    if(isSweet){
     alert("apple pie");   
    }    
    else{  
    alert("pizza");  
    }
}

