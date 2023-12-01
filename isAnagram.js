const getCharCountObject = (str) => {
  const charCountObj = {};

  for(let i = 0; i < str.length; i++) {
    const char = str[i];

    if(charCountObj[char]) {
      charCountObj[char] +=1;
    } else {
      charCountObj[char] = 1;
    }
  }

  return charCountObj;
}

const anagram = (strA, strB) => {
  const lowerStrA = strA.toLowerCase();
  const lowerStrB = strB.toLowerCase();

  if(lowerStrA.length !== lowerStrB.length) return false;

  const charACount = getCharCountObject(lowerStrA);
  const charBCount = getCharCountObject(lowerStrB);

  for(let key in charACount) {
    if(charACount[key] !== charBCount[key]) return false;
  }

  return true;
}

console.log(anagram('finder', 'Friend')) // true
console.log(anagram('hello', 'bye')) // false
console.log(anagram('lied', 'lide')) // true
console.log(anagram('gunel', 'elgun')) // true
