const getTextarea = document.getElementById("textarea");

const addLI = isNested => {
  const splitArray = getTextarea.value.split("\n");
  const getSelect = document.getElementById("indentation");
  const { value } = getSelect;
  return splitArray.map(x => isNested ? `${value}<li>${x}</li>` : `<li>${x}</li>`);

};

const nestList = (arr, mode) => [`<${mode}>`, ...arr, `</${mode}>`];

const appendLineBreaks = inputArray => inputArray.join("\r\n");

const basicList = () => {
  getTextarea.value = appendLineBreaks(addLI(false));
  document.getElementById("liOnly").blur();
};

const ulList = () => {
  getTextarea.value = appendLineBreaks(nestList(addLI(true), "ul"));
  document.getElementById("ulLi").blur();
};

const olList = () => {
  getTextarea.value = appendLineBreaks(nestList(addLI(true), "ol"));
  document.getElementById("olLi").blur();
};

document.getElementById("liOnly").addEventListener("click", basicList);

document.getElementById("ulLi").addEventListener("click", ulList);

document.getElementById("olLi").addEventListener("click", olList);
