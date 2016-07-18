/* variable declarations */
var guesses = [];
var currGuess;
var expectedGuess;
var prevDiff = 0;
var diff;
var isGuessed = false;

var max=100;
var min=1;
expectedGuess = (Math.floor(Math.random() * (max - min + 1)) + min).toString();
console.log(expectedGuess);

/* function declarations */

function isCorrectGuess() {

	//Add to array
	currGuess = $("#userGuess").val();
	if(guesses.indexOf(currGuess) == -1) {
		guesses.push(currGuess.toString());
		$("#count").html(guesses.length);
		console.log(guesses);
	}

	//If not guessed correctly
	if (!isGuessed) {

		diff = Math.abs(expectedGuess - currGuess);

		if (guesses.indexOf(expectedGuess) == -1) {

			//if (prevDiff == 0 ) {
			if ( diff > 0 && diff <= 10) {
				$("#feedback").html("Very Hot");
			} else if ( diff > 10 && diff <= 20) {
				$("#feedback").html("Hot");
			} else if ( diff > 20 && diff <= 30) {
				$("#feedback").html("Warm");
			} else {
				$("#feedback").html("Cold");
			} 

			//} else {
				/*
				if ( prevDiff > diff ) {
					$("#feedback").html("Getting Warmer");
				} else if (prevDiff < diff) {
					$("#feedback").html("Getting Colder");
				}
				*/
			//}

			prevDiff = diff;

		} else {

			$("#feedback").html("Bingo");
			isGuessed = true;
		}
	}
}

/* document load activity */
$(document).ready(function() {

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});
