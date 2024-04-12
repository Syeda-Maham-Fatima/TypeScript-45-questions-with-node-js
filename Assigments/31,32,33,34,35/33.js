//Question no 33;
var Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//using for-loop;
for (var _i = 0, Numbers_1 = Numbers; _i < Numbers_1.length; _i++) {
    var OneNumber = Numbers_1[_i];
    var ordinalEnding = void 0;
    if (OneNumber === 1) {
        ordinalEnding = "st";
    }
    else if (OneNumber === 2) {
        ordinalEnding = "nd";
    }
    else if (OneNumber === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log("".concat(OneNumber).concat(ordinalEnding));
}
