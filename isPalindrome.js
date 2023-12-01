// function isPalindrome(str) {
//   const replacedStr = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()']/g, "");
//   const changedStr = replacedStr.toLowerCase().replace(/\s/g, "");
//   const splitedStr = changedStr.split("");
//   const reversedStr = splitedStr.reverse();
//   const joinedStr = reversedStr.join("");

//   return joinedStr === changedStr;
// }

const isEqual = (firstChar, lastChar) => firstChar.toLowerCase() === lastChar.toLowerCase();
const isLetter = (char) => char.toLowerCase() !== char.toUpperCase();

function isPalindrome(str) {
  let start = 0;
  let end = str.length;
  while(start < end){
    let firstChar = str[start];
    let lastChar = str[end-1];

    if(!isLetter(firstChar)) {
      start++
      continue;
    }

    if(!isLetter(lastChar)) {
      end--
      continue;
    }

    if(!isEqual(firstChar, lastChar)) return false;

    start++;
    end--;
  }

  return true;
}

console.log(isPalindrome("Казак"), 1)//true
console.log(isPalindrome("Madam, I'm Adam"), 2)//true
console.log(isPalindrome("А в Енисее - синева"), 3)//true
console.log(isPalindrome("О, духи, от уборки микробу-то и худо"), 4)//true
console.log(isPalindrome("Не палиндром"), 5)//false
