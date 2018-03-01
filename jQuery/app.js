let getInput = $('textarea');
const getStrong = $('span')

function calculate() {
	let innerInput =	getInput[0].value;
	let calc = innerInput.length;
	getStrong.text(calc);
	}

getInput.on('input', calculate);