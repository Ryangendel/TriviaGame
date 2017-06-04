// variables

var questions = [
{
	question: "What's your faviort type of food?",
	answer: ["Pizza", "Tacos", "Burgers", "None of the above"],
	correctAnswer: "Pizza",
},
	{
	question: "What's your faviort type of condiment?",
	answer: ["Ketchup", "Mustard", "Mayo", "None of the above"],
	correctAnswer:"Ketchup",
},
	{
	question: "How much wood would a wood chuck chuck, if he could chuck wood?",
	answer: ["A lot", "A medium amount", "Very Little", "None" ],
	correctAnswer: "A lot",
},
	{
	question:"What is the best super power?",
	answer:["Flight", "Invisability", "Invinsibility", "Wearing a cape"],
	correctAnswer:"Flight",
},
];

// Events 

$('#start').on('click', function() {
	gameStart();
})

// Functions

var gameStart= function(){
	var j=0;
	var questionString= " " ;
	for(var i=0; i<questions.length;i++){
		j++;

	var answerString= " ";
	
	questionString='<div>' + j + '.' + questions[i].question + '</div>';

	for(var a = 0; a < questions[i].answer.length; a++){
		answerString +='<input class="answer" type="radio">' + questions[i].answers[a]+ '</input>';
	}

	


	}

}
