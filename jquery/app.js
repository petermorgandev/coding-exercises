const addLI = isNested => {
  event.target.blur();
  const splitArray = $("textarea").val().split("\n");
  const value = $("#indentation").val();
  return splitArray.map(x => isNested ? `${value}<li>${x}</li>` : `<li>${x}</li>`);
};

const nestList = (arr, mode) => [`<${mode}>`, ...arr, `</${mode}>`];

const appendLineBreaks = inputArray => inputArray.join("\r\n");

const basicList = () => {
  $("textarea").val(appendLineBreaks(addLI(false)));
};

const nestedList = () => {
  $("textarea").val(appendLineBreaks(nestList(addLI(true), event.target.id)));
};

$("#liOnly").on("click", basicList);
$("#ul").on("click", nestedList);
$("#ol").on("click", nestedList);