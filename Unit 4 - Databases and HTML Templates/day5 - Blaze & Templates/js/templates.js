Template.main.data = function(){
    
return votes;    
    
}

insertVote = function(vote){
 var templateInstance = UI.renderWithData(Template.result,vote);

var lastNode = $('#container')[0];
UI.insert(templateInstance,lastNode);    
}