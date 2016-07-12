$(document).ready(function() {

	var tblFb = document.getElementById("tblFizzBuzz");
    var number = prompt();
    var maxNumber = +number;
    var maxNum = parseInt(maxNumber);
	var count = 1;

    var printFizzBuzz = function (max) {

        while (count <= max){
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
    }

    printFizzBuzz(maxNum);
	
});