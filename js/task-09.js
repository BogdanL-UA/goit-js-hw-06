function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  bodyEl: document.querySelector('body'),
  changeColorButtonEl: document.querySelector('.change-color'),
  spanColorValue: document.querySelector('.color'),
};

const hendleChangeColorButtonClick = () => {
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
  refs.spanColorValue.textContent = refs.bodyEl.style.backgroundColor;
};

refs.changeColorButtonEl.addEventListener(
  'click',
  hendleChangeColorButtonClick
);
