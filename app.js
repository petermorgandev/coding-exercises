function liOnly() {
  let textBox = document.getElementById('textarea');
  let text = textBox.value;
  let n = text.split("\n");
  let newText = [];
  for (var x in n) {
    newText[x] = `<li>${n[x]}</li>`;
  }
  let result = newText.join("\r\n");;
  textBox.value = result;
}

function ulPlus(){
  let textBox = document.getElementById('textarea');
  let text = textBox.value;
  let n = text.split("\n");
  let newText = [];
  for (var x in n) {
    newText[x] = `\t <li>${n[x]}</li>`;
  }
  newText.unshift('<ul>');
  newText.push('</ul>');
  let result = newText.join("\r\n");;
  textBox.value = result;
};

function olPlus(){
  let textBox = document.getElementById('textarea');
  let text = textBox.value;
  let n = text.split("\n");
  let newText = [];
  for (var x in n) {
    newText[x] = `\t <li>${n[x]}</li>`;
  }
  newText.unshift('<ol>');
  newText.push('</ol>');
  let result = newText.join("\r\n");;
  textBox.value = result;
}