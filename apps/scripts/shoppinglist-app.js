var count = 0;

function addItemToList() {
	var item = $("#txtAddItem");
	var items = [];

	if (item.val() != "Add items here ... ") {

		if(item.val().length > 0){

			$('#itemsListAdd').append('<li class="itemsListAdd"><input type="checkbox" onclick="strikeThroughItem(this)"> '+ item.val() +'<img src="images/trashcan.jpeg" /></li>');

			$("img").click(function() {
		    	$(this).closest('li').remove();
		  	});

			$("#txtAddItem").val('');
		}
	}
}	

function strikeThroughItem(that) {
	if(that.checked)
	{
		$(that).closest('li').css("text-decoration", "line-through");
	} else {
		$(that).closest('li').css("text-decoration", "none");
	}
}

function clearText(){
	$("#txtAddItem").val('');
}

$(document).ready(function() {
	console.log("document ready...");

});


	