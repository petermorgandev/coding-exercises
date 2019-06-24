const getTextarea = document.getElementById("textarea");

const addLI = isNested => {
  event.target.blur();
  const splitArray = getTextarea.value.split("\n");
  const { value } = document.getElementById("indentation");
  return splitArray.map(x => isNested ? `${value}<li>${x}</li>` : `<li>${x}</li>`);
};

const nestList = (arr, mode) => [`<${mode}>`, ...arr, `</${mode}>`];

const appendLineBreaks = inputArray => inputArray.join("\r\n");

const basicList = () => {
  getTextarea.value = appendLineBreaks(addLI(false));
};

const nestedList = () => {
  getTextarea.value = appendLineBreaks(nestList(addLI(true), event.target.id));
};

document.getElementById("liOnly").addEventListener("click", basicList);

document.getElementById("ul").addEventListener("click", nestedList);

document.getElementById("ol").addEventListener("click", nestedList);
