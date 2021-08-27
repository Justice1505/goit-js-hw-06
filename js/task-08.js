const forms = {
  form: document.querySelector(".login-form"),
};

const form1 = {};

forms.form.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  for (let i = 0; i < e.currentTarget.elements.length - 1; i += 1) {
    if (forms.form.elements[i].value === "") {
      alert("Все поля должны быть заполнены!");
      return;
    }
  }

  const formData = new FormData(e.currentTarget);

  formData.forEach((b, c) => (form1[c] = b));

  forms.form.reset();

  console.log(form1);
}

