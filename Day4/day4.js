function centuryFromYear(years) {
    // find the baseline year / century
    const century = year / 100;
  
    // handle edge case
     if(year % 100 === 0){
         return century;
  }
  
    // return all other case
      return Math.floor(century) + 1;
  }