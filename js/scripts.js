var gallonToLiter = function(liter){
	return liter * 3.78541;
};

var literToGallon = function(gallon){
	return gallon / 3.78541;
};

var gallon = prompt("How many gallons do you have? ");
var liter = prompt("How many liters do you have? ");

alert(liter + " liters is equal to " + literToGallon(liter) + " gallons.");
alert(gallon + " gallons is equal to " + gallonToLiter(gallon) + " liters");
