$(document).ready(function() {

	var tblFb = document.getElementById("tblFizzBuzz");
	var count = 1;

    while (count < 16){
    	if (count % 15 == 0) {
    		document.write("FizzBuzz " + "<br />");
    	} else if (count % 3 == 0) {
    		document.write("Fizz " + "<br />");
    	} else if (count % 5 == 0) {
    		document.write("Buzz " + "<br />");
    	} else {
    		document.write(count + "<br />");
    	}
      	count++;
    }
	
});