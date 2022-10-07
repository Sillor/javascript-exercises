const repeatString = function(string, n) {
    let returnString = "";
    if (n >= 0) {
        for (let i = 0; i < n; i++) {
            returnString += string;
        }
    }
    else returnString = "ERROR";
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
