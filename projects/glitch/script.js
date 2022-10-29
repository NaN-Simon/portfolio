const container = document.querySelector('.container');

function createBox(boxname){
  const box = document.createElement('div');
  box.innerHTML = boxname;
  box.classList.add('box');
  colorChanger(box)
  const randomForWidth = sizeChanger(50, 250);
  box.style.width = `${randomForWidth}px`;
  const randomForHeight = sizeChanger(5, 25);
  box.style.height = `${randomForHeight}px`;
  box.style.left = `${sizeChanger(0, window.outerWidth) - randomForWidth}px`;
  box.style.top = `${sizeChanger(0, window.outerWidth) - randomForHeight}px`;
  container.append(box);
}


function colorChanger(elem){
   const current = randomer(0,255,true)
   const currentNoFloor = randomer(0,1,false)

   return elem.style.background =`rgb(${current}, ${current}, ${current}, ${currentNoFloor})`
}

//window.outerWidth
function sizeChanger(minSize, maxSize){
  const w = randomer(minSize, maxSize,true)
  return w
}

function randomer(start, end, isFloor){
  if(isFloor){
    return Math.floor(start + Math.random()*end)
  }
  return (start + Math.random()*end)
}

setInterval(()=>{
  createBox('')
  },50)

setInterval(()=>{
  if(container.childNodes.length > 10){
    container.removeChild(container.childNodes[0])
  }
  },50)


  window.container=container