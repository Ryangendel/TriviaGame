$(document).ready(function(){


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
});

var checkanswergame = function(){
	for (var i = 0; i<questions.length;i++){
	var rightanswer = questions[i].correctAnswer;

		console.log(rightanswer);
	}
}	
// Functions

var gameStart= function(){
	var j=0;
	var questionString= " " ;
	for(var i=0; i<questions.length;i++){
		console.log(questions[i])
		j++;

	
	var answerString= " ";
	
	questionString='<div>' + j + '.' + questions[i].question + '</div>';

	for(var a = 0; a < questions[i].answer.length; a++){
		answerString +='<input name="answername" type="radio" value="'+ questions[i].answer[a] +'">' + questions[i].answer[a]+ '<br>';
		
	}

	$('#questions').append(questionString + '<form>' + answerString + '</form>');

		}
		var button = '<button id="answercheck" type="summit">Check Answers</button>'
		$('#checkanswers').append(button);
	}

	$('#answercheck').on('click', function() {
		checkanswergame();
	});

});//end of document.ready func

