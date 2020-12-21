const uniqueChars = [];
const chars = str.split('');

chars.forEach((char) => {
    if(!uniqueChars.includes(char)) {
        uniqueChars.push(char);
    } 
});

return uniqueChars.length;