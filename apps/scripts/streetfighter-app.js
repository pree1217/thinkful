$(document).ready(function(){

	/* function declarations */

	function throwHadoukenPose(){
		$('.hadouken').show().animate(
		  {'left': '1020px'},
		  500,
		  function() {
		    $(this).hide();
		    $(this).css('left', '520px');
		  }
		);
		$('.hadouken').finish().show()
		  .animate(
		    {'left': '1020px'},
		    500,
		    function() {
		      $(this).hide();
		      $(this).css('left', '520px');
		    }
  		);
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.ryu-still').hide();
	}

	function returnToReadyPose(){
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
		$('.ryu-still').hide();
	}


	/* Event declarations */

	$('.ryu, .hulk-ryu')
		.mouseenter(function(){
			$('.ryu-ready').show();
			$('.ryu-still').hide();
		})
		.mouseleave(function(){
			$('.ryu-still').show();
			$('.ryu-ready').hide();
		})
		.mousedown(function(){
			throwHadoukenPose();
		})
		.mouseup(function(){
			returnToReadyPose();
		});

	$(document)
		.keypress(function(e) {
			//alert('pressped key');
			var keycode = (e.keyCode ? e.keyCode : e.which);
		    if(keycode == 120) {
		        throwHadoukenPose();
		    }
		})
		.keyup(function(e) {
			returnToReadyPose();
		});
		
});
