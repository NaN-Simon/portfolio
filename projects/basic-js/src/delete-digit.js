const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  function deleteSymb(number, c) {
    return number.toString().replace(number.toString()[c - 1], "");
  }
  let max = 0;
  for (let i = 1; i <= n.toString().length; i++) {
    let temp = deleteSymb(n, i);
    if (temp > max) {
      max = temp;
    }
  }
    return max*1
}

module.exports = {
  deleteDigit
};
