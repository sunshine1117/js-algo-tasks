const str = "AAAABBBCCXYZEEEFFFAAAAAABBBBBBBB";

//Нужно ее сократить, что бы получилось так - A4B3C2XYZD4E3F3A6B8

const convertStr = (str) => {
  if(typeof str !== "string") return;

  let convertedStr = "";
  let prevChar = "";
  let counter = 1;

  for(let i = 0; i <= str.length; i++) {
    if(prevChar === str[i]) {
      counter++;
    } else {
      convertedStr += prevChar;
      prevChar = str[i];

      if(counter !== 1) {
        convertedStr += counter;
        counter = 1;
      }
    }
  }

  return convertedStr;
}

console.log(convertStr(str));
console.log(convertStr("")); //""
console.log(convertStr("AA")); //"A2"
console.log(convertStr("AB")); //"AB"
console.log(convertStr("ABbbbbbbbb")); //"ABb8"
console.log(convertStr("AAABBBCCC")); //"A3B3C3";
