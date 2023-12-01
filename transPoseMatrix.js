/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
  const result = [];

  for(let i = 0; i < matrix[0].length; i++) {
      result[i] = []
      for(let j = 0; j < matrix.length; j++) {
          result[i][j] = matrix[j][i];
      }
  }

  return result;
};

const matrix = [[1,2,3],[4,5,6]];//[[1,4],[2,5],[3,6]]
const matrix1 = [[1,2,3],[4,5,6],[7,8,9]];//[[1,4,7],[2,5,8],[3,6,9]]
console.log(transpose(matrix));
console.log(transpose(matrix1));
