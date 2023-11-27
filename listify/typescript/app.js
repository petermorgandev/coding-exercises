var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var getTextarea = document.getElementById("textarea");
var addLI = function (isNested) {
    var splitArray = getTextarea.value.split("\n");
    var getSelect = document.getElementById("indentation");
    var value = getSelect.value;
    return splitArray.map(function (x) {
        return isNested ? value + "<li>" + x + "</li>" : "<li>" + x + "</li>";
    });
};
var nestList = function (arr, mode) { return __spreadArrays([
    "<" + mode + ">"
], arr, [
    "</" + mode + ">"
]); };
var appendLineBreaks = function (inputArray) {
    return inputArray.join("\r\n");
};
var basicList = function () {
    getTextarea.value = appendLineBreaks(addLI(false));
    document.getElementById("liOnly").blur();
};
var ulList = function () {
    getTextarea.value = appendLineBreaks(nestList(addLI(true), "ul"));
    document.getElementById("ulLi").blur();
};
var olList = function () {
    getTextarea.value = appendLineBreaks(nestList(addLI(true), "ol"));
    document.getElementById("olLi").blur();
};
document.getElementById("liOnly").addEventListener("click", basicList);
document.getElementById("ulLi").addEventListener("click", ulList);
document.getElementById("olLi").addEventListener("click", olList);
