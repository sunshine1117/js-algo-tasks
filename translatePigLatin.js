function translatePigLatin(str) {
  if(/[^aeiou]+/.test(str[0])) {
    const consonant = str.match(/[^aeiou]+/)[0];
    return str.replace(/[^aeiou]+/, '') + consonant + 'ay';
  }

  return str + 'way';
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("california"))//aliforniacay
console.log(translatePigLatin("algorithm"))//algorithmway
