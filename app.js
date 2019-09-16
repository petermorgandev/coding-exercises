const listify = {
  dom: {
    textBox: document.getElementById("textarea"),
    indentValue: document.getElementById("indentation"),
    li: document.getElementById("liOnly"),
    ul: document.getElementById("ul"),
    ol: document.getElementById("ol")
  },
  addLI(isNested) {
    event.preventDefault();
    event.target.blur();
    const splitArray = this.dom.textBox.value.split("\n");
    return splitArray.map(x => isNested ? `${this.dom.indentValue.value}<li>${x}</li>` : `<li>${x}</li>`);
  },
  nestList(arr, mode) { 
    return [`<${mode}>`, ...arr, `</${mode}>`];
  },
  appendLineBreaks(inputArray) {
    return inputArray.join("\r\n");
  },
  basicList() {
    listify.dom.textBox.value = listify.appendLineBreaks(listify.addLI(false));
  },
  nestedList() {
    listify.dom.textBox.value = listify.appendLineBreaks(listify.nestList(listify.addLI(true), event.target.id));
  }
}

listify.dom.li.addEventListener("click", listify.basicList);

listify.dom.ul.addEventListener("click", listify.nestedList);

listify.dom.ol.addEventListener("click", listify.nestedList);
