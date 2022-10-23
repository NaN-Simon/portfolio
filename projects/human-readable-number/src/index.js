module.exports = function toReadable(number) {
    let arr = ("" + number).split("").map(Number);
    let result = [];
    if (arr[arr.length - 1] != undefined) {
        result.unshift(lessTen(arr[arr.length - 1]));
    }
    if (arr[arr.length - 2] != undefined) {
        if (arr[arr.length - 2] == 1) {
            result.unshift(lessTwenty(arr[arr.length - 1]));
            result.pop();
        } else if (arr[arr.length - 2] > 1 && arr[arr.length - 1] == 0) {
            result.unshift(lessHundred(arr[arr.length - 2]));
            result.pop();
        } else {
            result.unshift(lessHundred(arr[arr.length - 2]));
        }
    }
    if (arr[arr.length - 3] != undefined) {
        if (arr[arr.length - 1] == 0 && arr[arr.length - 2] == 0) {
            result.pop();
        }
        result.unshift("hundred");
        result.unshift(lessTen(arr[arr.length - 3]));
    }
    for (let i = 0; i < arr.length; i++) {
        if (result[i] == undefined) {
            result.splice(i, 1);
        }
    }
    return result.toString().replace(/[\.,]/g, " ");
};
function lessTen(number) {
    switch (number) {
        case 0:
            return "zero";
        case 1:
            return "one";
        case 2:
            return "two";
        case 3:
            return "three";
        case 4:
            return "four";
        case 5:
            return "five";
        case 6:
            return "six";
        case 7:
            return "seven";
        case 8:
            return "eight";
        case 9:
            return "nine";
    }
}
function lessTwenty(number) {
    switch (number) {
        case 0:
            return "ten";
        case 1:
            return "eleven";
        case 2:
            return "twelve";
        case 3:
            return "thirteen";
        case 4:
            return "fourteen";
        case 5:
            return "fifteen";
        case 6:
            return "sixteen";
        case 7:
            return "seventeen";
        case 8:
            return "eighteen";
        case 9:
            return "nineteen";
    }
}
function lessHundred(number) {
    switch (number) {
        case 1:
            return "ten";
        case 2:
            return "twenty";
        case 3:
            return "thirty";
        case 4:
            return "forty";
        case 5:
            return "fifty";
        case 6:
            return "sixty";
        case 7:
            return "seventy";
        case 8:
            return "eighty";
        case 9:
            return "ninety";
    }
}
