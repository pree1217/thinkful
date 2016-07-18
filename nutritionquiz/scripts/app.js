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
	    	"question":"If you're looking for the most fiber in a loaf of bread, the operative words are ", 
	    	"choices": ["unbleached", "enriched wheat flour","whole-wheat flour","twelve-grain"],
	    	"answer": "(c) Whole-wheat flour contains the bran and the germ, and thus is rich in vitamins, minerals, and fiber. Wheat flour, whether bleached or unbleached, loses vitamins and minerals when it is refined. Even when it is enriched, only some—not all—of these nutrients are added back in. 'Twelve-grain' or 'seven-grain' may not mean anything, since the bread can still be mostly re-fined wheat ('white') flour. Most rye and pumpernickel contain little or no whole grain, but if you can find whole-grain versions, they are good, too.",
	    	"correctAnswer": ["whole-wheat flour"]
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
	var  isSame = (arr.length == arrAnswers.length) && arr.every(function(element, index) {
	    return element === arrAnswers[index]; 
	});

	if(isSame){
		score+=1;
	}
}

function goToNextQuestion() {

	//get selected value
    var radioValue = $("input[type=checkbox]:checked").val();

    //construct an array of 
    var checkedValues = $('input:checkbox:checked').map(function() {
    	return this.value;
	}).get();//.join(',');

    evaluateAnswer(checkedValues,elemNo);
    if(checkedValues){

		$("#question"+elemNo).hide();

		elemAnswer.html('');
		elemAnswer.append(objQuestions[elemNo-1].answer);
		elemNo+=1;

		console.log(elemNo);
		if (elemNo > numQuestions) {
			console.log("Done");
			elemChoices.html('');
			elemComplete.append("Great. You're done! You answered "+score+" out of "+numQuestions+" correct!");
		} else {
			$("#question"+elemNo).show();
		}
	}

	$('input:checkbox').removeAttr('checked');
}

function loadQuiz(){

	for(var index in objQuestions) {
		html='';
		var question = objQuestions[index].question;
		var choices = objQuestions[index].choices;

		html+="<div class='question' id='question"+elemNo+"'><span>"+question+"</span>";
		
		for(var key in choices) {
			var choice = choices[key];
			html+="<ul><li><input type='checkbox' id="+key+"-option name='selector' value='"+choice+"'/> "+choice+"</li></ul>";
		}

		html+="<div class='submitAnswer'><input class='submit' type='button' value='Next' onclick='return goToNextQuestion();'</div>";
		elemChoices.append(html);

		elemNo+=1;
	}
}

/* document load activity */
$(document).ready(function() {

	loadQuiz();

	elemNo=1;
	numQuestions=objQuestions.length;
	
	$("#question"+elemNo).show();

});


/*

var count = 1;

var ping = function(cb){
	setTimeout(function()
		{
			console.log("P....... " + count * 200 + "ms");
			count++;
			cb(ping);
		},200);
}

var pong = function(cb){
	setTimeout(function()
		{
			console.log(".......P "+ count * 200 + "ms");
			count++;
			cb(pong);
		},200);
}


var smash_timeout = 1030;
var smash = function(){
	console.log("<-------------------- " + smash_timeout + "ms");
};

ping(pong);
setTimeout(smash,smash_timeout);

*/