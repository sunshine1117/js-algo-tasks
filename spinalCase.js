function spinalCase(str) {
  console.log(str.split(/\s|_|(?=[A-Z])/))
  return str
  .split(/\s|_|,|(?=[A-Z])/)
  .join("-")
  .toLowerCase();
}

// function spinalCase(str) {
//   return str
//     .split(/\s|_|(?=[A-Z])/)
//     .join("-")
//     .toLowerCase();
// }

console.log(spinalCase('This,Is,Spinal,Tap'));
console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("The_Andy_Griffith_Show"));
