// function destroyer(arr, ...args) {
//   return arr.filter(el => Array.from(args).indexOf(el) === -1);
// }

function destroyer(arr) {
  const valsToRemove = Array.from(arguments);
  console.log(valsToRemove)
  return arr.filter(function(val) {
    return !valsToRemove.includes(val);
  });
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
