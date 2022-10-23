const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  let upgrArr = [];
  domains.forEach((el) => {
    upgrArr.push(el.split("."));
  });
  upgrArr.forEach((el) => {
    el.reverse();
  });
  upgrArr.forEach((el) => {
    let temp = "";
    for (let i = 0; i < el.length; i++) {
      temp += "." + el[i];
      if (result[temp]) {
        result[temp]++;
      } else {
        result[temp] = 1;
      }
    }
  });
  return result
}

module.exports = {
  getDNSStats
};
