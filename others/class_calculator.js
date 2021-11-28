class Calculator {
	constructor(num1, num2, operator) {
		this.num1 = num1;
		this.num2 = num2;
		this.operator = operator;
	}
	// Getter for sum function
	get fromsum() {
		return this.sumFunction();
	}
	// sum function (method)
	sumFunction() {
		return this.num1 + this.num2; 
	}
}

const calcObj = new Calculator(5, 5);
console.log(calcObj.fromsum);
