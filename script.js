const numbers = document.querySelectorAll('.number');
const symbols = document.querySelectorAll('.symbol');
const display = document.querySelector('.display');
let currentInput = '';
let storedInput = '';
let currentOperator = '';

function operate(symbol, a, b) {
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

function showDisplay(value) {
	display.textContent = value;
}

function clearCalculator() {
	currentInput = '';
	storedInput = '';
	currentOperator = '';
	showDisplay('0');
}

numbers.forEach((number) => {
	number.addEventListener('click', () => {
		currentInput += number.textContent;
		showDisplay(currentInput);
	});
});

symbols.forEach((symbol) => {
	symbol.addEventListener('click', () => {
		if (symbol.textContent === '=') {
			if (storedInput && currentInput && currentOperator) {
				const result = operate(currentOperator, parseFloat(storedInput), parseFloat(currentInput));
				showDisplay(result);
				currentInput = result.toString();
				storedInput = '';
				currentOperator = '';
			}
		} else if (symbol.textContent === 'C') {
			clearCalculator();
		} else {
			if (currentInput) {
				if (storedInput && currentOperator) {
					const result = operate(currentOperator, parseFloat(storedInput), parseFloat(currentInput));
					storedInput = result.toString();
				} else {
					storedInput = currentInput;
				}
				currentOperator = symbol.textContent;
				currentInput = '';
			}
		}
	});
});

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

// Initialize display
clearCalculator();
