var audio, context, analyser, src, array, logo

logo = document.getElementById('logo').style
audio = document.getElementById('audio')

window.onclick = function(){
  preparation();
  audio.play();
}

function preparation(){
  context = new AudioContext(); //методы позволяющие изменять аудио дорожку
  analyser = context.createAnalyser(); //доступ к аудиофалам (чистоты, форма волны)
  src = context.createMediaElementSource(audio) //создаем обьект из медиаэлемента
  src.connect(analyser) //подключение к audio analyser
  analyser.connect(context.destination) //передача звука на колонки
  loop()
}

function loop(){
  window.requestAnimationFrame(loop) //вызов рекурсии для снижения нагрузки на браузер
  array = new Uint8Array(analyser.frequencyBinCount) //оптимизация входящих данных без знаков +- [0, 255]
  analyser.getByteFrequencyData(array) //копируем данные текущей частоты в наш массив

  logo.minHeight = (array[40])*3+'px';
  logo.width = (array[40])*3+'px';
}









//https://youtu.be/6prlWtOBIX8?list=LL