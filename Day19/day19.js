function alphabetSubsequence(str) {
    const chars = str.split('');
    const charCodes = chars.map((char) => char.charCodeAt(0));
    
    if(new Set(charCodes).size !== charCodes.length) {
        return false;
    }
    
    for (let i = 0; i < charCodes.length - 1; i++) {
        if(charCodes[i] > charCodes[i + 1]) {
            return false;
        }
    }
    
    return true;
}
