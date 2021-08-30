const inputElement = document.querySelector("#validation-input");

inputElement.addEventListener("blur", onInputValidation);

function onInputValidation(ev) {
  const valueLength = ev.currentTarget.value.length;
  const requiredLength = Number(inputElement.dataset.length);

  this.classList.add("invalid");
  this.classList.remove("valid");

  if (valueLength === requiredLength) {
    this.classList.add("valid");
    this.classList.remove("invalid");
  }
}