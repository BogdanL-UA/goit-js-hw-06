const inputEl = document.querySelector('#validation-input');
const inputValidLength = Number(inputEl.dataset.length);
console.log(inputEl.id);

const onInputValidation = (event) => {
  if (event.currentTarget.value.trim().length === inputValidLength) {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
};

inputEl.addEventListener('blur', onInputValidation);
