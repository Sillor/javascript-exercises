const palindromes = function (string) {
    let backwards = "";
    let clean = "";
    for (let i = string.length - 1; i >= 0; i--) {
        if (string.charAt(i).toUpperCase() !=
            string.charAt(i).toLowerCase()) {
                backwards += string.charAt(i);
            }
    }
    for (let i = 0; i <= string.length - 1; i++) {
        if (string.charAt(i).toUpperCase() !=
            string.charAt(i).toLowerCase()) {
                clean += string.charAt(i);
            }
    }
    return (backwards.toLowerCase() === clean.toLowerCase());
};

// Do not edit below this line
module.exports = palindromes;
