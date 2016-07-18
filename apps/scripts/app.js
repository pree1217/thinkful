var ping = function(cb) {
	setTimeout(function() {
		console.log("ping");
		cb(ping);
	},100);
}

var pong = function(cb) {
	setTimeout(function() {
		console.log("pong");
		cb(pong);
	},200);
}
//ping(pong);

var sayHello = function() {
	setInterval(function() {
		console.log("Hello");
	},100);
}
//sayHello();

var ping = function() {
	setInterval(function() {
		console.log("ping");
	},200);
}

var pong = function() {
	setInterval(function() {
		console.log("pong");
	},300);
}

//ping();
//pong();


var Human = {
    planet: "earth",
    living: "yes"
};
var alien = Object.create(Human); // create an alien object, inheriting from the Human class

alien.name = "ET";
//Human.name = "Jake";

console.log(alien.name); // Harry
console.log(Human.name); // Marley


