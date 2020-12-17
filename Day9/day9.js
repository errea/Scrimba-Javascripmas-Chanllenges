function sumOddFibonacciNumbers(num) {
    let sum = 0;
    let previous = 0;
    let current = 1;

  while (current <= num ) {

  if (current % 2 === 1){
       sum += current;
}

  const nextValue = current + previous;
  previous = current;
  current = nextValue;
}


return sum;

}