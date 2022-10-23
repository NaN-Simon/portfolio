const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error("'arr' parameter must be an instance of the Array!");
  }

  let result = arr.slice(0)

  if((result.indexOf('--discard-prev')) === (result.indexOf('--double-next')+2)){
    let current = result.indexOf("--double-next")
    result.splice(current,1,result[current+1])
    let current2 = result.indexOf("--discard-prev")
    result.splice(current2-1,2)
  }
  if((result.indexOf('--discard-prev')) === (result.indexOf('--discard-next')+2)){
    let current = result.indexOf("--discard-next")
    result.splice(current,2)
    result.splice(result.indexOf('--discard-prev'), 1)
  }
  if((result.indexOf('--double-prev')) === (result.indexOf('--discard-next')+2)){
    result.splice(result.indexOf("--discard-next"), 2)
    result.splice(result.indexOf('--double-prev'), 1)
  }
  if((result.indexOf('--double-next'))+2 === (result.indexOf('--double-prev'))){
    let current = result.indexOf("--double-next")
    result.splice(current,1,result[current+1],result[current+1])
    result.splice(result.indexOf('--double-prev'), 1)
  }
  if(result.includes("--double-next")){
  if(result.indexOf("--double-next") !== result.length-1){result.splice(result.indexOf("--double-next"),1,result.indexOf("--double-next")+1)} else {result.splice(result.indexOf("--double-next"),1)}}

  if(result.includes("--double-prev")){
  if(result.indexOf("--double-prev") !== 0){result.splice(result.indexOf("--double-prev"),1,result.indexOf("--double-prev"))} else {result.splice(result.indexOf("--double-prev"), 1)}}

  if(result.includes("--discard-next")) {result.splice(result.indexOf("--discard-next"), 2)}

  if (result.includes("--discard-prev")) {
    if (result.indexOf("--discard-prev") !== 0) {
      result.splice(result.indexOf("--discard-prev") - 1, 2);
    } else {
      result.splice(result.indexOf("--discard-prev"), 1);
    }
  }
  return result;
}


module.exports = {
  transform
};
