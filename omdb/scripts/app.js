var myData = [];
var html = '';

var showResults = function(myData) {

	$.each(myData, function(index, value) {
		html+= '<p>' + value.Title + '</p>';
	});

	$("#search-results").html(html);
}

$(function(){

	$.getJSON('http://www.omdbapi.com/?s=Star%20Wars&r=json', function(data){
		showResults(data.Search);
	});

	$("#movies-form").submit(function(event){
		//alert("hi");
		event.preventDefault();
		//var searchTerm = $("search-term").val();
		//console.log(searchTerm);
	});

});


