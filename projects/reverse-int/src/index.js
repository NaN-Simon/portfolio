module.exports = function reverse (n) {
  n = Math.abs(n);
  let result = []
  let arr = (""+n).split("").map(Number)
  for (let i=0;i<arr.length;i++){
  result.push(arr[arr.length-1-i])
  }
  return result.toString().replace(/[\.,]/g, '')
}
