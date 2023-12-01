const isPrime = require("./numIsPrime.js");

function sumPrimes(num) {
  let sum = 0;
  for(let i = 0; i < num; i++) {
    if(isPrime(i)) {
      sum += i;
    }

    console.log(`sum: ${sum}`);
  }

  return sum;
}

console.log(sumPrimes(10));
