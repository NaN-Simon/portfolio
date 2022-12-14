const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(n) {
  if (isNaN(n)) {
    return false;
  }
  if (typeof n !== "string") {
    return false;
  }
  if (n <= 0) {
    return false;
  }
  if (n == null) {
    return false;
  }
  if (n == undefined) {
    return false;
  }

  n = n * 1;
  
  let result = Math.ceil(
    Math.log(MODERN_ACTIVITY / n) / (0.693 / HALF_LIFE_PERIOD)
  );
  if(result>0){return result}else{return false}
}

module.exports = {
  dateSample
};
