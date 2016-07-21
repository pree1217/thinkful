var myData = [];
var html = '';

var showResults = function(myData) {
	html='';
	$("#search-results").html(html);
	$.each(myData, function(index, value) {
		html+= '<p>' + value.Title + '</p>';
	});
	$("#search-results").html(html);
}

var getSearchRequest = function(searchTerm) {
	//$.getJSON('http://www.omdbapi.com/?s='+searchTerm+'&r=json',function(data){
	//	showResults(data.Search);
	//});

	var params = {
		s: searchTerm,
		r: 'json'
	};
	url = 'http://www.omdbapi.com';

	$.getJSON(url,params, function(data) {
		showResults(data.Search);
	});
}

$(function() {
	$("#movies-form").submit(function(event) {
		event.preventDefault();
		var searchTerm = $("#search-term").val();
		getSearchRequest(searchTerm);
	});

});


