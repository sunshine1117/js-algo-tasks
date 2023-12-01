function fearNotLetter(str) {
  const alphabiteStr = 'abcdefghijklmnopqrstuvwxyz';
  const subAlphabit = alphabiteStr.substring(alphabiteStr.indexOf(str[0]));
  console.log(alphabiteStr.indexOf(str[0]), subAlphabit);

  for(let i = 0; i < str.length; i++) {
    if(str[i] !== subAlphabit[i]) return subAlphabit[i]
  }

  return;
}

console.log(fearNotLetter("stvwx"))//u
console.log(fearNotLetter("abce"));
