console.log("ready");


/*
Create a house. The house should have some basic properties. The house should have a function that logs the number of bedrooms and bathrooms. 
Then, create a mansion, that has a different number of bedrooms. From the mansion, create a castle, and the castle should have a different number
 of bathrooms, and a different number of bedrooms. Finally, call the function that prints the number of bedrooms and bathrooms for each.
*/


var house={
	bedrooms: 4,
	bathrooms: 2,
	printHouse:function(){
		return "Bedrooms: " + this.bedrooms + ", Bathrooms: " + this.bathrooms; 
	}
}

var mansion = Object.create(house);
mansion.bedrooms = 7;

var castle = Object.create(mansion);
castle.bedrooms = 10;
castle.bathrooms = 5;

console.log(mansion.printHouse());
console.log(castle.printHouse());

for(var prop in castle){
	console.log(prop);
	var propValue = castle[prop];
	console.log(propValue);
}