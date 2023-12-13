const isPrime = require("./numIsPrime.js");

function smallestCommons(arr) {
  const [min, max] = arr.sort((a, b) => a-b);
  const numberDivisors = max - min + 1;
}

smallestCommons([1,5]);
