function convertHTML(str) {
  const htmlEntityObject = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };

  for (let key of Object.keys(htmlEntityObject)) {
    console.log(key, str[key])
    str.replace(key, htmlEntityObject[key])
  }

  return str.split('').map(el => htmlEntityObject[el] || el).join('');
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Schindler's List"));
console.log(convertHTML("<>"));
console.log(convertHTML("Sixty > twelve"));
