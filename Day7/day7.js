function countVowelConsonant(str) {
    const vowels = ["a","e","i","o","u"]
    const chars = str.split('');
    const total = chars.reduce((acc, char) => {
       if (vowels.includes(char)) {
             return acc + 1;

}       
             return acc + 2;  

}, 0);

     return total;

}