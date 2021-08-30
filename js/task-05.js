const inputs = {
  inputEl: document.querySelector("#name-input"),
  nameEl: document.querySelector("#name-output"),
};

inputs.inputEl.addEventListener("input", onInputEvent);

function onInputEvent(event) {
  inputs.nameEl.textContent = event.currentTarget.value;
  if (inputs.nameEl.textContent === "") {
    inputs.nameEl.textContent = "Anonymous";
  }
}
