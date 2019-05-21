const getTextarea = document.getElementById("textarea");
const getSelect = document.getElementById("indentation");

const addLI = isNested => {
  let splitArray = getTextarea.value.split("\n");
  let { value } = getSelect;
  if (isNested) {
    return splitArray.map(x => `${value}<li>${x}</li>`);
  } else {
    return splitArray.map(x => `<li>${x}</li>`);
  }
};

const nestList = (arr, mode) => [`<${mode}>`, ...arr, `</${mode}>`];

const appendLineBreaks = inputArray => inputArray.join("\r\n");

const basicList = () => {
  getTextarea.value = appendLineBreaks(addLI());
};

const ulList = () => {
  getTextarea.value = appendLineBreaks(nestList(addLI(true), "ul"));
};

const olList = () => {
  getTextarea.value = appendLineBreaks(nestList(addLI(true), "ol"));
};

document.getElementById("liOnly").addEventListener("click", basicList);

document.getElementById("ulLi").addEventListener("click", ulList);

document.getElementById("olLi").addEventListener("click", olList);
