/* variable declarations */
var objQuestions = [
	    {
	    	"question":"Only one juice is high in iron. Is it ", 
	    	"choices": ["orange", "prune","carrot","apricot"],
	    	"answer": "(b) A cup of prune juice has 3 milligrams of iron (that's 37% of the RDA for men, 17% of the RDA for premenopausal women).",
	    	"correctAnswer": ["prune"]
	    }, 
	    {
	    	"question":" Vitamin E is one of the few major nutrients not listed on nutrition labels, in part because only a few foods contain significant amounts. What are the best sources? ", 
	    	"choices": ["eggs", "wheat germ","safflower oil","nuts"],
	    	"answer": "(b, c, and d) Vegetable oils (except olive oil) and products made from them (such as margarine) are the richest sources. Nuts and wheat germ are also good. But most foods rich in vitamin E are very high in fat. ",
	    	"correctAnswer": ["wheat germ","safflower oil","nuts"]
	    }, 
	    {
	    	"question":"Sulforaphane, a compound thought to protect against cancer, is found in ", 
	    	"choices": ["broccoli", "cabbage","tea","kale"],
	    	"answer": "(a, b, and d) It is found primarily in members of the Brassica family, also known as cruciferous vegetables, such as broccoli, cabbage, kale, and cauliflower. These and other vegetables also contain other protective elements, some of which may not have been identified yet. ",
	    	"correctAnswer": ["broccoli", "cabbage","kale"]
	    }, 
	    {
	    	"question":"Say calcium and most people think milk, but other foods are rich in calcium as well—such as which of the following? ", 
	    	"choices": ["dried figs", "broccoli", "dried beans", "almonds"],
	    	"answer": "(all) Ounce for ounce, dried figs, broccoli, and cooked dry beans have as much or more calcium than milk. Ofcourse, you shouldn't try to get all your calcium from figs and almonds—both are high in calories. ",
	    	"correctAnswer": ["dried figs", "broccoli", "dried beans", "almonds"]
	    },
	    {
	    	"question": " Despite some rumors, a lime juice marinade cannot really 'cook' raw fish or shellfish and kill all bacteria.",
	    	"choices": ["true", "false"],
	    	"answer": "(True) Lime juice may kill bacteria on the surface of fish or shellfish, but it won't kill any dangerous microorganisms below the surface. Eating raw fish or shellfish marinated in lime juice (ceviche) is risky.",
	    	"correctAnswer": ["true"]
	    }
];
var elemNo = 1;
var numQuestions = 0;
var html='';
var elemChoices = $(".choices");
var elemAnswer = $(".answer");
var elemComplete = $(".complete");
var score = 0;
var arrAnswers = [];

/* function declarations */

function evaluateAnswer(arr,index) {
	arrAnswers = objQuestions[index-1].correctAnswer;

	//for every element in arr, check if the element (in arr) is exactly equal to the correct 
	//answers array at the index 'index'
	if(arr.length == 1){
		//Support IE8 issue
		var  isSame = (arr[0] == arrAnswers[0]);
	} else {

		var  isSame = (arr.length == arrAnswers.length) && arr.every(function(element, index) {
		    return element === arrAnswers[index]; 
		});
	}

	if(isSame){
		score+=1;
	}

	if(isSame){
		return "Correct. "
	} else {
		return "Wrong. "
	}
}

function goToNextQuestion() {

	//get selected value
    //construct an array of 
    var checkedValues = $('input:checkbox:checked').map(function() {
    	return this.value;
	}).get();//get() converts jquery object into an array
	//.join(',');
    
    var guess = evaluateAnswer(checkedValues,elemNo);

    if(checkedValues.length > 0){

		$("#question"+elemNo).hide();

		elemAnswer.html('');
		elemAnswer.append(guess);
		elemAnswer.append(objQuestions[elemNo-1].answer);
		elemNo+=1;

		//last page
		if (elemNo > numQuestions) {
			elemChoices.html('');
			elemComplete.append("Great. You're done!</br>");
			elemComplete.append("You answered "+score+" out of "+numQuestions+" correct!");
		} else {
			$("#question"+elemNo).show();
		}
	}

	$('input:checkbox').removeAttr('checked');
}

function loadQuiz() {

	for(var index in objQuestions) {
		html='';
		var question = objQuestions[index].question;
		var choices = objQuestions[index].choices;

		html+="<div class='question' id='question"+elemNo+"'><span>"+question+"</span><ul>";
		
		for(var key in choices) {
			var choice = choices[key];
			html+="<li><input type='checkbox' id="+key+"-option name='selector' value='"+choice+"'/> "+choice+"</li>";
		}

		html+="</ul><div class='submitAnswer'><input class='button' type='button' value='Next' onclick='return goToNextQuestion();'</div>";
		elemChoices.append(html);

		elemNo+=1;
	}
}

/* document load activity */
//$(document).ready(function() {
$(function(){

	loadQuiz();

	elemNo=1;
	numQuestions=objQuestions.length;
	
	$("#question"+elemNo).show();

});
