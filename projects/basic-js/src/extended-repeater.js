const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if(options.separator === undefined){options.separator = '+'}
  if(options.additionSeparator === undefined){options.additionSeparator = '|'}
  if(options.addition === undefined){options.addition = ""}
  let result = "";
  for (let i = 0; i < options.repeatTimes || i < 1; i++) {
    result += str;
    for (let j = 0; j < options.additionRepeatTimes || j < 1; j++) {
      result += options.addition;
      if ((j !== options.additionRepeatTimes - 1) && (options.additionRepeatTimes !== undefined)) {
        result += options.additionSeparator;
      }
    }
    if ((i !== options.repeatTimes - 1) && (options.repeatTimes !== undefined)) {
      result += options.separator;
    }
  }
  return result
}

module.exports = {
  repeater
};
