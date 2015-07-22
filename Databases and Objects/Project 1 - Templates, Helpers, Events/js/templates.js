defaultSurveyQuestion = 
	{surveyQuestion: "What are the most popular places to be during lunch?",
	responses:		[{responseText: "LA CAFE", responsePercent: 30},
				{responseText: "CAFETERIA", responsePercent: 25},
				{responseText:"BLUE TOP", responsePercent: 20},
				{responseText: "SOCCER FIELD", responsePercent: 15},
				{responseText:"STUDENT LOUNGE", responsePercent: 10}
				],
	roundNumber:1,
	houses:["Blue","Green"]}

var surveyQuestion = ReactiveVar(defaultSurveyQuestion.surveyQuestion)
var responses = ReactiveVar(defaultSurveyQuestion.responses);
var leftHouse = ReactiveVar(defaultSurveyQuestion.houses[0]);
var rightHouse = ReactiveVar(defaultSurveyQuestion.houses[1]);




insertNewMessage = function(newMessageObject){
var currentMessages= messagesReactive.get();
messagesReactive.set(currentMessages.concat([newMessageObject]));
    
    
}