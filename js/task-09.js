function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colors = {
  body: document.querySelector("body"),
  btn: document.querySelector(".change-color"),
  color: document.querySelector(".color"),
};

colors.btn.addEventListener("click", changeColor);

function changeColor() {
  const color = getRandomHexColor();

  colors.body.style.backgroundColor = color;
  colors.color.textContent = color;
}
