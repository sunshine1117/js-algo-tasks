/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//   for(let i = 0; i < nums.length; i++) {
//       for(let j = i + 1; j < nums.length; j++) {
//           if(nums[i] + nums[j] === target) {
//             console.log(nums[i], nums[j]);
//              return [i, j];
//           }
//       }
//   }

//   return [];
// };

// second solution

let twoSum = (nums, target) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }


  return []
}

console.log(twoSum([7, 12, 2, 9, 6, 9, 2, 8, 9, 6, 8, 10, 13, 11], 25))
