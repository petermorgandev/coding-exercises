var getTextarea = document.getElementById("textarea");
var addLI = function (isNested) {
    var splitArray = getTextarea.value.split("\n");
    var getSelect = document.getElementById("indentation");
    var value = getSelect.value;
    return splitArray.map(function (x) {
        return isNested ? value + "<li>" + x + "</li>" : "<li>" + x + "</li>";
    });
};
var nestList = function (arr, mode) { return [
    "<" + mode + ">"
].concat(arr, [
    "</" + mode + ">"
]); };
var appendLineBreaks = function (inputArray) {
    return inputArray.join("\r\n");
};
var basicList = function () {
    getTextarea.value = appendLineBreaks(addLI(false));
};
var ulList = function () {
    getTextarea.value = appendLineBreaks(nestList(addLI(true), "ul"));
};
var olList = function () {
    getTextarea.value = appendLineBreaks(nestList(addLI(true), "ol"));
};
document.getElementById("liOnly").addEventListener("click", basicList);
document.getElementById("ulLi").addEventListener("click", ulList);
document.getElementById("olLi").addEventListener("click", olList);
