function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buffs = {
  boxesEl: document.querySelector("#boxes"),
  inputEl: document.querySelector("[type='number']"),
  createBtnEl: document.querySelector("[data-create]"),
  clearBtnEl: document.querySelector("[data-destroy]"),
};

let quantity = 0;
let boxesStorage = [];

buffs.inputEl.addEventListener("input", onInputGetQuantity);
buffs.createBtnEl.addEventListener("click", onClickMakeBoxes);
buffs.clearBtnEl.addEventListener("click", destroyBoxes);

function onInputGetQuantity(event) {
  quantity = event.currentTarget.value;
}

function onClickMakeBoxes() {
  let tempStorage = [];

  // масив с нужными дивами
  for (let i = 0; i < quantity; i += 1) {
    const box = document.createElement("div");

    tempStorage.push(box);
  }

  // функция создания дивов с их характеристиками
  function addStylesToDiv(el) {
    const elementSize = 30 + 10 * boxesStorage.indexOf(el);

    function getRandomColor() {
      // рандомное число для цвета
      function getRandomInt() {
        return Math.floor(Math.random() * 255);
      }

      return `rgb(${getRandomInt()}, ${getRandomInt()}, ${getRandomInt()})`;
    }


    el.style.backgroundColor = getRandomHexColor();
    el.style.width = `${elementSize}px`;
    el.style.height = `${elementSize}px`;
    el.style.marginTop = "4px";

    return el;
  }

  // добавляем дивы в общее хранилище
  boxesStorage.push(...tempStorage);

  // наполняем дивы их характеристиками
  tempStorage = tempStorage.map(addStylesToDiv);

  // добавляем дивы 
  buffs.boxesEl.append(...boxesStorage);
}

function destroyBoxes() {
  boxesStorage.forEach((el) => buffs.boxesEl.removeChild(el));
  boxesStorage = [];
}
