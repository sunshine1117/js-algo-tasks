// фазза поиск
// Дано слова "крокодил"
// нужно определить, содержить ли оно в себе переданную строку

// кроко - true
// кодил - true
// ид - false

const str = "крокодил";

const hasStr = (reg) => {
  const regex = new RegExp(reg);
  return regex.test(str)
};

console.log(hasStr("кроко"));
console.log(hasStr("кодил"));
console.log(hasStr("ид"));
