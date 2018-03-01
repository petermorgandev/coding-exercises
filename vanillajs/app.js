let getInput = document.getElementsByTagName('textarea');
const getStrong = document.getElementsByTagName('span')

function calculate() {
	let innerInput =	getInput[0].value;
	let calc = innerInput.length;
	getStrong[0].innerText = calc;
	}

getInput[0].addEventListener('input', calculate);