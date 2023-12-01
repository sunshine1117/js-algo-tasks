const array1 = [[1, 3], [2, 6], [8, 10], [15, 18]]; // [[1, 6], [8, 10], [15, 18]]
const array2 = [[1, 4], [4, 5]]; // [[1, 5]]
const array3 = [[11, 12], [2, 3], [5, 7], [1, 4], [8, 10], [6, 8]]; // [[1, 4], [5, 10], [11, 12]]
//[[1,4], [2,3], [5,6], [8,9], [9,12]] -- [1, 4] [2, 3] || [1,2] [2,5] || [1,3] [2, 5] || [1,4] [2,4]
function merge(intervals) {
  // ваш код
  let sortedArr = intervals.sort((a, b) => a[0] - b[0]);
  let result = [sortedArr[0]];

  for(let i = 0; i < sortedArr.length; i++) {
    const resent = result[result.length - 1];
    if(resent[1] >= sortedArr[i][0]) {
      resent[1] = Math.max(resent[1], sortedArr[i][1])
    } else {
      result.push(sortedArr[i])
    }
  }

  return result;
}

console.log(merge(array1));
console.log(merge(array2));
console.log(merge(array3));
