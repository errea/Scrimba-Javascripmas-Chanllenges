function reverseAString(str) {
    // return str.split('').reversed().join('');

    let reversedStr = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
}