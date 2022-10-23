function getCommonCharacterCount(s1, s2) {
  let testArr = [1,1,2,3,3]
  let count = {}
  testArr.forEach(function(i){
    count[i]=(count[i]||0)+1
  })
  console.log(count)
  
}
getCommonCharacterCount()