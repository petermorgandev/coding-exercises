const listify = {
  dom: {
    textBox: document.getElementById("textarea"),
    indentValue: document.getElementById("indentation"),
    li: document.getElementById("liOnly"),
    ul: document.getElementById("ul"),
    ol: document.getElementById("ol")
  },
  addLI: function(isNested) {
    event.target.blur();
    const splitArray = listify.dom.textBox.value.split("\n");
    const { value } = listify.dom.indentValue;
    return splitArray.map(x => isNested ? `${value}<li>${x}</li>` : `<li>${x}</li>`);
  },
  nestList: function(arr, mode) { 
    return [`<${mode}>`, ...arr, `</${mode}>`];
  },
  appendLineBreaks: function(inputArray) {
    return inputArray.join("\r\n");
  },
  basicList: function() {
    listify.dom.textBox.value = listify.appendLineBreaks(listify.addLI(false));
  },
  nestedList: function() {
    listify.dom.textBox.value = listify.appendLineBreaks(listify.nestList(listify.addLI(true), event.target.id));
  }
}

listify.dom.li.addEventListener("click", listify.basicList);

listify.dom.ul.addEventListener("click", listify.nestedList);

listify.dom.ol.addEventListener("click", listify.nestedList);
