$(document).ready(function(){

	$(".headerImage")
	.mouseover(function(){
		//alert("mouse over");
		$(this).attr("src", "images/ryu-throwing-hadouken.png");
	})
	.mouseout(function(){
		//alert("mouse out");
		$(this).attr("src", "images/ryu-standing-still.png");
	})
	
});