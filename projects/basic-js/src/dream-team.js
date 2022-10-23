const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  members = toRemoveArray(members);
  members = toClear(members);
  members = toRemoveWhiteSpace(members);
  members = toRemoveWord(members);
  members = toArrayUpper(members);
  members = toSort(members);
  return members.join("");

  function toArrayUpper(arr) {
    let temp = arr.map((el) => 
      el.toUpperCase()
    );
    return temp
  }
  function toRemoveArray(arr) {
    let temp = [];
    arr.forEach((elem, index) => {
      if (!Array.isArray(elem)) {
        temp.push(elem);
      }
    });
    return temp;
  }
  function toClear(arr) {
    let temp = [];
    arr.forEach((element, index) => {
      if (typeof element == "string" || typeof element == "object") {
        if (element !== null) {
          temp.push(element);
        }
      }
    });
    temp.forEach((el, index) => {
      if (typeof el == "object") {
        temp.splice(temp.indexOf(el), 1);
      }
    });
    temp.forEach((el, index) => {
      if (el === "") {
        temp.splice(temp.indexOf(el), 1);
      }
    });
    return temp;
  }
  function toRemoveWord(arr) {
    arr = arr.map((item) => item.slice(0, 1));
    return arr;
  }
  function toSort(arr) {
    return arr.sort();
  }
  function toRemoveWhiteSpace(arr) {
    arr = arr.map((item) => item.replace(/\s+/g, ""));
    return arr;
  }
}

module.exports = {
  createDreamTeam
};
