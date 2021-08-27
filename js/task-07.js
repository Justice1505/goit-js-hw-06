const inputElement = document.querySelector("#font-size-control");
const textElement = document.querySelector("#text");

inputElement.addEventListener("input", onInputChangeSize);

function onInputChangeSize(event) {
  textElement.style.fontSize = `${event.currentTarget.value * 0.29}px`;
}
