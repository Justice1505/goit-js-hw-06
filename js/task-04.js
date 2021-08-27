const counts = {
  incrementBtn: document.querySelector('[data-action="increment"]'),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  value: document.querySelector("#value"),
};

let counterValue = 0;

function onBtnClickIncrement() {
  counterValue += 1;

  counts.value.textContent = counterValue;
}

function onBtnClickDecrement() {
  counterValue -= 1;

  counts.value.textContent = counterValue;
}

counts.incrementBtn.addEventListener("click", onBtnClickIncrement);

counts.decrementBtn.addEventListener("click", onBtnClickDecrement);
