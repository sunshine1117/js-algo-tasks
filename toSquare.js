//Дан массив целих чисел в порядке возрастания
// [-4, -1, 0, 3, 10]
// Нужно возвести каждое в квадрат сохранив оригинальную сортировку
// result - [0, 1, 9, 16, 100]

const toSquareNums = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  const result = [];

  while(left <= right) {
    const leftSquare = arr[left]**2;
    const rightSquare = arr[right]**2;

    if(leftSquare > rightSquare) {
      result.unshift(leftSquare);
      left++;
    } else {
      result.unshift(rightSquare);
      right--;
    }
  }

  return result;
}


console.log(toSquareNums([-4, -1, 0, 3, 10]));
