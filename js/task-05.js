const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

const onInputChangeOutput = (event) => {
  if (event.currentTarget.value.trim() !== '') {
    spanEl.textContent = event.currentTarget.value;
  } else {
    spanEl.textContent = 'Anonymous';
  }
};
inputEl.addEventListener('input', onInputChangeOutput);
