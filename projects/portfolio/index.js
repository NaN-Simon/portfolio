import i18Obj from './assets/files/translate.js'

const headerBurger = document.querySelector('.header-burger')
const navList = document.querySelector('.nav-list')
const navLink = document.querySelectorAll('.nav-link')
const body = document.querySelector('body')
headerBurger.addEventListener('click',function(){
  headerBurger.classList.toggle('active')
  navList.classList.toggle('active')
  body.classList.toggle('lock')
  if(headerBurger.classList.contains('active') && (localStorage.getItem("theme") === "light")){
    headerBurger.classList.add('header-burger-black')
  } else {
    headerBurger.classList.remove('header-burger-black')
  }
})

navLink.forEach((el) => el.addEventListener('click',closeMenu))

function closeMenu(){
  if(event.target.classList.contains('nav-link')){
    navList.classList.remove('active')
	headerBurger.classList.toggle('active')
  }
}
/*BUTTONS*/
const buttonsPortfolio = document.querySelectorAll('.portfolio-btns')
const buttonWinter = document.querySelector('.winter')
const porfolioImg = document.querySelectorAll('.portfolio-image')
buttonWinter.addEventListener('click',function(){
  removeActiveAll()
  addActiveThis()
  porfolioImg.forEach((img,index)=>img.src = `./assets/img/portfolio/winter/${index + 1}.jpg`)
})
const buttonSpring = document.querySelector('.spring')
buttonSpring.addEventListener('click',function(){
  removeActiveAll()
  addActiveThis()
  porfolioImg.forEach((img,index)=>img.src = `./assets/img/portfolio/spring/${index + 1}.jpg`)
})
const buttonSummer = document.querySelector('.summer')
buttonSummer.addEventListener('click',function(){
  removeActiveAll()
  addActiveThis()
  porfolioImg.forEach((img,index)=>img.src = `./assets/img/portfolio/summer/${index + 1}.jpg`)
})
const buttonAutumn = document.querySelector('.autumn')
buttonAutumn.addEventListener('click',function(){
  removeActiveAll()
  addActiveThis()
  porfolioImg.forEach((img,index)=>img.src = `./assets/img/portfolio/autumn/${index + 1}.jpg`)
})
function removeActiveAll(){
  document.querySelectorAll('.portfolio-btns .btn-active').forEach(n => n.classList.remove('btn-active'));
}
function addActiveThis(){
  buttonsPortfolio.forEach(item => event.target.classList.add('btn-active'))
}

/*LANGUAGES */
const datai18 = document.querySelectorAll('*[data-i18]')
const formLang = document.querySelector('.form-lang')
function getTranslate(lang){
  datai18.forEach(elem => elem.textContent = i18Obj[lang][elem.dataset.i18])
}
function addRU(){
  getTranslate('ru')
  document.getElementById('email').placeholder = "Почта"
  document.getElementById('tel').placeholder = "Телефон"
  document.getElementById('textarea').placeholder = "Сообщение"
  navLink.forEach(e => e.style.padding = "0 11px")
}
function addEN(){
  getTranslate('en')
  document.getElementById('email').placeholder = "E-mail"
  document.getElementById('tel').placeholder = "Phone"
  document.getElementById('textarea').placeholder = "Message"
}
const name = document.querySelector('[name=box]')
formLang.addEventListener('click',function(){
  if(name.checked){
    addRU()
  } else {
    addEN()
  }
  //localStorage
  if (localStorage.getItem("lang") === "ru") {
    localStorage.removeItem("lang")
  } else {
      localStorage.setItem("lang", "ru");
    }
    //changeLanguageToHTML()
  })
  function changeLanguageToHTML() {
    try {
      if (localStorage.getItem("lang") === "ru") {
        addRU();
        name.setAttribute("checked", "checked")
      } else {
        addEN();
      }
    } catch (err) {}
  }
  changeLanguageToHTML();

/*LIGHT-THEME*/

function addLight(){
  const toLight = ['body','.skill-name','.skill-discription','.section-header-title','.light']
  toLight.forEach(element => {document.querySelectorAll([element]).forEach(elem => elem.classList.add('light-theme'))
  });
  document.querySelectorAll(('.section-header-title'),'::before').forEach(el => el.classList.add('section-header-title-black'))
  document.querySelectorAll('.footer').forEach(el => el.classList.add('dark-theme'))
  if(window.screen.width <= 768){
    navList.style.background = "#ffffff"
    navLink.forEach(el=>{el.style.color = "#000000"})
  }
  window.addEventListener('resize', function(){
    if(window.screen.width <= 768){
      navList.style.background = "#ffffff";
      navLink.forEach(el=>el.style.color = "#000000")
    }else{
      navList.style.background = "none";
      navLink.forEach(el=>el.style.color = "#ffffff")
    }
})
}
function removeLight(){
  const toLight = ['body','.skill-name','.skill-discription','.section-header-title','ul.nav-list.active','.light']
  toLight.forEach(element => {document.querySelectorAll([element]).forEach(elem => elem.classList.remove('light-theme'))
  });
  document.querySelectorAll(('.section-header-title'),'::before').forEach(el => el.classList.remove('section-header-title-black'))
  document.querySelectorAll('.footer').forEach(el => el.classList.remove('dark-theme'))
  headerBurger.classList.remove('header-burger-black')
  if(window.screen.width <= 768){
    navList.style.background = "#000000"
    navLink.forEach(el=>{el.style.color = "#ffffff"})
  }
  window.addEventListener('resize', function(){
    if(window.screen.width <= 768){
      navList.style.background = "#000000";
      navLink.forEach(el=>el.style.color = "#ffffff")
    }else{
      navList.style.background = "none"
      navLink.forEach(el=>el.style.color = "#ffffff")
    }
})
}
/* function goLight(){
  const toLight = ['body','.skill-name','.skill-discription','.section-header-title','.light']
  toLight.forEach(element => {document.querySelectorAll([element]).forEach(elem => elem.classList.toggle('light-theme'))
  });
  document.querySelectorAll(('.section-header-title'),'::before').forEach(el => el.classList.toggle('section-header-title-black'))
  document.querySelectorAll('.footer').forEach(el => el.classList.toggle('dark-theme'))
} */
/* const toggleTheme = document.querySelector(".toggle-theme");
    toggleTheme.addEventListener("click", function () {
      goLight();
      toggleTheme.classList.toggle("toggle-theme-dark");
      toggleTheme.classList.toggle("toggle-theme");
    }); */

const toggleTheme = document.querySelector('.toggle-theme')
toggleTheme.addEventListener("click", (event) => {
  event.preventDefault();
  if (localStorage.getItem("theme") === "light") {
    localStorage.removeItem("theme");
  } else {
    localStorage.setItem("theme", "light");
  }
  addLightClassToHTML();
});

function addLightClassToHTML() {
  try {
    if (localStorage.getItem("theme") === "light") {
      addLight();
    } else {
      removeLight();
    }
  } catch (err) {}
}
addLightClassToHTML();

console.log('1.Смена изображений в секции portfolio +25\n2.Перевод страницы на два языка +25\n3.Переключение светлой и тёмной темы +25\n4.Дополнительный функционал +5\n5.Дополнительный функционал: сложные эффекты для кнопок при наведении и/или клике +5')