var html = '';

var showResults = function(data) {
	html='';
	$("#search-results").html(html);

	data.map(function(elem){
		let url = elem.snippet.thumbnails.medium.url;
		console.log(url);
		//var imgElem = document.createElement('img');
		html+= '<a href="http://www.google.com"><img src='+ url +'><br>';
		//showResults(elem.snippet.thumbnails);				
	});

	$("#search-results").html(html);
}

var getSearchRequest = function(searchTerm) {
	let results = [];
	let thumbnails;

	// $.getJSON(url,params, function(data) {
	// 	console.log(data);
	// });

	$.ajax({
		url:'https://www.googleapis.com/youtube/v3/search',
		data: {
			q: searchTerm,
			part: 'snippet',
			key: 'AIzaSyDGxv8SXMOBMAuZO7pl23I1x4DWCAqXR4g'
		},
		success: function(response) {
			results = response.items;
			console.log(results);
			showResults(results);
	    },
	    error: function(xhr) {
			console.log(error);
	    }
	});
}

$(function() {
	$("#movies-form").submit(function(event) {
		event.preventDefault();
		var searchTerm = $("#search-term").val();
		getSearchRequest(searchTerm);
	});

});


