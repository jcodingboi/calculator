const add = function(a,b) {
	let sum = a + b;
	return sum;
};

const subtract = function(a,b) {
	let difference = a - b;
	return difference;
};

const multiply = function(array) {
	const product = array.reduce((acc, curr) => acc * curr, 1);
	return product;
};

const divide = function(a,b) {
	let quotient = a / b;
	return quotient;
};
