/* variable declarations */
var objQuestions = [];
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
$(function() {

    //start ajax request
    $.ajax({
        url: "scripts/data.json",
        dataType: "json",
        success: function(data) {
            objQuestions = data[0].data;

			loadQuiz();

			elemNo=1;
			numQuestions=objQuestions.length;
			
			$("#question"+elemNo).show();
    
        }
    });
});
