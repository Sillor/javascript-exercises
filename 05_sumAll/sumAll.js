const sumAll = function (x, y) {
    let sum = 0;
    if (x >= 0 && y >= 0 && 
        typeof x === 'number' && typeof y === 'number') {
        if (x < y) {
            for (let i = x; i <= y; i++)
                sum += i;
        }
        else {
            for (let i = x; i >= y; i--)
                sum += i;
        }
        return sum;
    }
    else return 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
