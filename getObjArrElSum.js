 const getOddNumbersSum = (arr) => {
  return arr.reduce((acc, el) => {
    const oddNumber = el % 2 === 0 ? 0 : el;

    return acc + oddNumber;
  }, 0);
}

const getObjArrElsSum = (arr) => {
  return arr.reduce((acc, el, index) => {
    const sum = getOddNumbersSum(el);

    return {...acc, [index]:  sum}
  }, {});
}

console.log(getObjArrElsSum([]))

console.log(getObjArrElsSum([[1, 2, 3, 7], [4, 5, 7, 1], [6, 7, 2, 4], [4, 5, 6, 3], [6, 7, 17, 3], [4, 5, 6, 1]]));
