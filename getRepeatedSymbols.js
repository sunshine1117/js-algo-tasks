//first solution

const someString = 'grand development';

// const getRepeatedSymbols = (str) => {
//   const charCount = str.split('').reduce((acc, char) => {
//     acc[char] = (acc[char] || 0) + 1;
//     return acc;
//   }, {});

//   return Object.keys(charCount)
//     .filter((char) => charCount[char] > 1)
//     .join('');
// }

// console.log(getRepeatedSymbols(someString)); // Output: nde

//second solution

// const someString = 'grand development';

// const getRepeatedSymbols = (str) => {
//   let repeatedSymbols = '';
//   const splitedStr = str.split('');
//   const symbolsObj = {};

//   for(let i = 0; i < splitedStr.length; i++) {
//     if(symbolsObj[splitedStr[i]] >= 0) {
//       symbolsObj[splitedStr[i]] += 1;
//     } else {
//       symbolsObj[splitedStr[i]] = 1; // Fix: Set it to 1 instead of 0
//     }
//   }

//   for(let key of Object.keys(symbolsObj)) {
//     if(symbolsObj[key] > 1) { // Fix: Check for greater than 1 to find repeated symbols
//       repeatedSymbols += key;
//     }
//   }

//   return repeatedSymbols;
// }

// console.log(getRepeatedSymbols(someString)); // Output: nde

//third solution

const getRepeatedSymbols = (str) => {
  const charCount = new Map();
  const repeatedSymbols = [];

  for (const char of str) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (const [char, count] of charCount) {
    if (count > 1) {
      repeatedSymbols.push(char);
    }
  }

  return repeatedSymbols.join('');
}

console.log(getRepeatedSymbols(someString)); // Output: nde
