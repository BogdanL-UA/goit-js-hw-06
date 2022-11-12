const inputEl = document.querySelector('#font-size-control');
const spanTextEl = document.querySelector('#text');

const hendleFontSizeControl = (event) => {
  spanTextEl.style.fontSize = `${event.currentTarget.value}px`;
};
inputEl.addEventListener('input', hendleFontSizeControl);
