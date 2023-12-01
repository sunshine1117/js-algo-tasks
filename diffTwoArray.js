function diffArray(arr1, arr2) {
  let newArr = [];

  function diff(a, b) {
    for(let i = 0; i < a.length; i++) {
      if(b.indexOf(a[i]) === -1) {
        newArr.push(a[i]);
      }
    }
  }

  diff(arr1, arr2);
  diff(arr2, arr1);

  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]))
