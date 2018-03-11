let getInput = $('textarea');
const getspan = $('span');

function calculate() {
  let innerInput = getInput[0].value;
  let calc = innerInput.length;
  getspan.text(calc);
  }


getInput.on('input', calculate);