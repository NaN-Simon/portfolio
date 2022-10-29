const hamburgerMenu = document.querySelector(".menu__btn");
const hamburgerMenuBlackback = document.querySelector(
  ".hamburger-menu__blackback"
);
hamburgerMenu.addEventListener("click", () => {
  activateBackground(hamburgerMenuBlackback);
});

function activateBackground(currentClass) {
  if (currentClass.classList.contains("hamburger-menu__blackback--open")) {
    currentClass.classList.remove("hamburger-menu__blackback--open");
  } else {
    currentClass.classList.add("hamburger-menu__blackback--open");
  }
}

/* close by active "about" */
const menuToggle = document.querySelector("#menu__toggle");
const menuItemActive = document.querySelector(".menu__item.active");
menuItemActive.addEventListener("click", (event) => {
  menuToggle.checked = false;
  activateBackground(hamburgerMenuBlackback);
});

/* window.addEventListener('resize', function(event){
  var newWidth = window.innerWidth;
  var newHeight = window.innerHeight; 
}); */

console.log(jsonPets);
/* maps */
const petsMaps = document.querySelector(".pets__pagination-items");

function addElement(jsonPets) {
  let newElem = document.createElement("li");
  newElem.innerHTML = pullNewEl(jsonPets);

  newElem.classList.add("pets__pagination-item");
  petsMaps.append(newElem);
}

function pullNewEl(jsonPets) {
  function catchNone(el) {
    if (el != "none") {
      return el;
    } else {
      return "";
    }
  }

  let a = `
  <img src=${
    jsonPets.img
  } alt="pets-woody"class="pets__pagination-item-img"/><div class="pets__pagination-item-info"><div class="pets__pagination-item-info-title">${
    jsonPets.name
  }</div><button class="pets__pagination-item-info-btn fillIn">Learn more</button></div><div class="pets__pagination-modal"><img src=${
    jsonPets.img
  } alt="pets-woody" class="pets__pagination-modal-img"><div class="pets__pagination-modal-info"><div class="pets__pagination-modal-info-name">${
    jsonPets.name
  }</div><div class="pets__pagination-modal-info-type">${
    jsonPets.type
  }</div><div class="pets__pagination-modal-info-description">${
    jsonPets.description
  }</div><div class="pets__pagination-modal-info-age">${
    jsonPets.age
  }</div><div class="pets__pagination-modal-info-inoculations">${catchNone(
    jsonPets.inoculations
  )}</div><div class="pets__pagination-modal-info-diseases">${catchNone(
    jsonPets.diseases
  )}</div><div class="pets__pagination-modal-info-parasites">${catchNone(
    jsonPets.parasites
  )}</div></div><div class="pets__pagination-modal-btn">&#9587;</div></div><div class="pets__pagination-modal-blackback"></div>`;
  return a;
}
addElement(jsonPets[4]);
addElement(jsonPets[0]);
addElement(jsonPets[2]);

/* slider random */

const petsPaginationleft = document.querySelector(".pets__pagination-btn-left");
const petsPaginationRight = document.querySelector(
  ".pets__pagination-btn-right"
);
//petsMaps
let petsMapsInner = [
  petsMaps.children[0].innerHTML,
  petsMaps.children[1].innerHTML,
  petsMaps.children[2].innerHTML,
];
const arrayMain = [
  pullNewEl(jsonPets[4]),
  pullNewEl(jsonPets[0]),
  pullNewEl(jsonPets[2]),
  pullNewEl(jsonPets[1]),
  pullNewEl(jsonPets[3]),
  pullNewEl(jsonPets[5]),
  pullNewEl(jsonPets[6]),
  pullNewEl(jsonPets[7]),
];

petsPaginationRight.addEventListener("click", function () {
  nextRandom();
  petsMapsInner = [
    petsMaps.children[0].innerHTML,
    petsMaps.children[1].innerHTML,
    petsMaps.children[2].innerHTML,
  ];
});

function nextRandom() {
  let firstN = 1;
  firstN = pullNewEl(jsonPets[shuffleForSoloNum(arrayMain)]);
  while (petsMapsInner.includes(firstN)) {
    firstN = pullNewEl(jsonPets[shuffleForSoloNum(arrayMain)]);
  }
  
  let secondN = 2;
  secondN = pullNewEl(jsonPets[shuffleForSoloNum(arrayMain)]);
  while (secondN === firstN || petsMapsInner.includes(secondN)) {
    secondN = pullNewEl(jsonPets[shuffleForSoloNum(arrayMain)]);
  }
  let thirdN = 3;
  thirdN = pullNewEl(jsonPets[shuffleForSoloNum(arrayMain)]);
  while (
    firstN === secondN ||
    secondN === thirdN ||
    thirdN === firstN ||
    petsMapsInner.includes(thirdN)
  ) {
    thirdN = pullNewEl(jsonPets[shuffleForSoloNum(arrayMain)]);
  }

  petsMaps.innerHTML = `
  <li class="pets__pagination-item">${firstN}</li>
  <li class="pets__pagination-item">${secondN}</li>
  <li class="pets__pagination-item">${thirdN}</li>
  `;
}

function shuffleForSoloNum(array) {
  for (let i = array.length - 1; i > 0; i--) {
    return Math.floor(Math.random() * (i + 1));
  }
  return array;
}

/* modal */

const petsItem = document.querySelectorAll(".pets__pagination-item");

petsItem.forEach(function (event) {
  event.addEventListener(
    "click",
    function () {
      openModal(this);
    },
    { once: true }
  );
});
function openModal(current) {
  current
    .querySelector(".pets__pagination-modal")
    .classList.add("pets__pagination-modal--open");
  current
    .querySelector(".pets__pagination-modal-blackback")
    .classList.add("pets__pagination-modal-blackback--open");
}

const petsModalBtn = document.querySelectorAll(".pets__pagination-modal-btn");
petsModalBtn.forEach(function (event) {
  event.addEventListener("click", function () {
    this.parentNode.classList.remove("pets__pagination-modal--open");
    this.parentNode.nextElementSibling.classList.remove(
      "pets__pagination-modal-blackback--open"
    );
  });
});
const petsModalBlackback = document.querySelectorAll(
  ".pets__pagination-modal-blackback"
);
petsModalBlackback.forEach(function (event) {
  event.addEventListener("click", function () {
    this.previousElementSibling.classList.remove(
      "pets__pagination-modal--open"
    );
    this.classList.remove("pets__pagination-modal-blackback--open");
  });
});
