function listify(mode) {
  let newText = [],
    textBox = document.getElementById('textarea'),
    n = textBox.value.split("\n");

  for (var x in n) {
    if (mode) {
      newText[x] = `\t <li>${n[x]}</li>`;
    } else {
      newText[x] = `<li>${n[x]}</li>`;
    }
  }

  if (mode) {
    newText.unshift(`<${mode}>`);
    newText.push(`</${mode}>`);
  }

  textBox.value = newText.join("\r\n");
};

document.getElementById('liOnly').addEventListener('click',  () => { listify() });

document.getElementById('ulLi').addEventListener('click', () => { listify('ul') });

document.getElementById('olLi').addEventListener('click',  () => {listify('ol')});