function uniteUnique(...arr) {
  const uniqeArr = new Set(arr.flat());
  return Array.from(uniqeArr);
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
