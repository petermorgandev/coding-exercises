const getTextarea = document.getElementById("textarea");

function addLI(isNested) {
  let splitArray = getTextarea.value.split("\n");
  if (isNested) {
    return splitArray.map(x => `\t <li>${x}</li>`);
  } else {
    return splitArray.map(x => `<li>${x}</li>`);
  }
}

const nestList = (arr, mode) => [`<${mode}>`, ...arr, `</${mode}>`];

const appendLineBreaks = inputArray => inputArray.join("\r\n");

const basicList = () => {
  getTextarea.value = appendLineBreaks(addLI());
};

const nestedList = mode => {
  getTextarea.value = appendLineBreaks(nestList(addLI(true), mode));
};

document.getElementById("liOnly").addEventListener("click", basicList);

document.getElementById("ulLi").addEventListener("click", () => {
  nestedList("ul");
});

document.getElementById("olLi").addEventListener("click", () => {
  nestedList("ol");
});
