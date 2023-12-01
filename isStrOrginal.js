const isStrOriginal = (str) => {
  const newStr = Array.from(new Set(str.toLowerCase().split(''))).join('');
  console.log(newStr);

  return str === newStr;
}

console.log(isStrOriginal('MamA'));
console.log(isStrOriginal('Roman'));
console.log(isStrOriginal('anaN'));
