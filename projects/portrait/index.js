//18.10.2022 - 08.08.2022
const text = document.querySelector('.text')
const inner = text.innerHTML
const words = ['sit', 'vitae', 'eveniet']
const words2 = ['voluptates','possimus','excepturi'];
const words3 = ['quod','quasi','dolores','molestiae']
const innerArray = inner.split(" ")

for(let i = 0; i <innerArray.length; i++){
  if (contains(words, innerArray[i])){
    innerArray[i] = '010'
  }
}

for(let i = 0; i <innerArray.length; i++){
  if (contains(words2, innerArray[i])){
    innerArray[i] = '28.10.2021 - 28.10.2022'
  }
}

for(let i = 0; i <innerArray.length; i++){
  if (contains(words3, innerArray[i])){
    innerArray[i] = 'Hello World'
  }
}

function textChanger(textInPortrain, newText){
  for(let i = 0; i <innerArray.length; i++){
    if (innerArray[i] === textInPortrain){
      innerArray[i] = newText
    }
  }
}

function contains(where, what){
  for(var i=0; i<where.length; i++){
    if(where.indexOf(what) === -1) return false;
  }
  return true;
}

textChanger('commodi', '0101')
textChanger('sequi', '0101')
textChanger('distinctio', '0101')
textChanger('reprehenderit', '0101')
textChanger('veniam', '0101')
textChanger('Excepturi', '0101')
textChanger('sequi', '0101')
textChanger('commodi', '0101')
textChanger('dolores', '0101')
textChanger('cum', '0101')
textChanger('facere', '0101')
textChanger('beatae', '0101')
textChanger('eligendi', '0101')
textChanger('unde', '0101')
textChanger('ratione', '0101')
textChanger('Sequi', '0101')
textChanger('ducimus', '0101')
textChanger('quos', '0101')
textChanger('totam', '0101')
textChanger('tempore', '0101')
textChanger('architecto', '0101')

/* Display */

text.innerHTML = innerArray.join(" ")


/* Statistics */

var result = {};
innerArray.forEach(function(a){
    if (result[a] != undefined)
        ++result[a];
    else
        result[a] = 1;
});

let sortable = []
for (var title in result) {
  sortable.push([title, result[title]]);
}

sortable.sort(function(a,b){
  return b[1] - a[1]
})
console.log(sortable)