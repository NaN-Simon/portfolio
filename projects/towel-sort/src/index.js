module.exports = function towelSort(matrix) {
  if(arguments.length === 0){ return []}
  let result;
  let arrResult = []
  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
          if (i % 2 === 0) {
              result = j;
          } else {
              result = matrix[i].length - 1 - j;
          }
          arrResult.push(matrix[i][result]);
      }
  }
  return arrResult
}