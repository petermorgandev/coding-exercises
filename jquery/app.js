let getInput = $('textarea');
const getpan = $('span')

function calculate() {
	let innerInput =	getInput[0].value;
	let calc = innerInput.length;
	getpan.text(calc);
	}

getInput.on('input', calculate);