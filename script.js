const numbers = document.querySelectorAll('.number');
const symbols = document.querySelectorAll('.symbol');

function operate (symbol,a,b) {
	switch (symbol) {
		case '+':
			return add(a,b);
		case '-':
			return subtract(a,b);
		case '*':
			return multiply(a,b);
		case '/':
			return divide(a,b);
	}
}

const add = function(a,b) {
	let sum = a + b;
	return sum;
};

const subtract = function(a,b) {
	let difference = a - b;
	return difference;
};

const multiply = function(a,b) {
	let product = a * b;
	return product;
};

const divide = function(a,b) {
	let quotient = a / b;
	return quotient;
};
