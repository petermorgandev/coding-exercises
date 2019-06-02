const getTextarea = <HTMLInputElement>document.getElementById("textarea");
const getSelect = <HTMLInputElement>document.getElementById("indentation");

const addLI = (isNested: boolean): Array<string> => {
  let splitArray: Array<string> = getTextarea.value.split("\n");
  let { value } = getSelect;
  if (isNested) {
    return splitArray.map((x: string) => `${value}<li>${x}</li>`);
  } else {
    return splitArray.map((x: string) => `<li>${x}</li>`);
  }
};

const nestList = (arr: Array<string>, mode: string): Array<string> => [
  `<${mode}>`,
  ...arr,
  `</${mode}>`
];

const appendLineBreaks = (inputArray: Array<string>): string =>
  inputArray.join("\r\n");

const basicList = () => {
  getTextarea.value = appendLineBreaks(addLI(false));
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
