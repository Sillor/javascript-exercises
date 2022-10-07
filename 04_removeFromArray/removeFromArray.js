const removeFromArray = function(arr, ...x) {
    for (let i = 0; i < x.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === x[i]) {
                arr.splice(j, 1);
                break;
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
