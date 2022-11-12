function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const boxesEl = document.querySelector('#boxes');
const controlsEl = document.querySelector('#controls');
const controlsRefs = {
  input: controlsEl.querySelector('input'),
  create: controlsEl.querySelector('[data-create]'),
  destroy: controlsEl.querySelector('[data-destroy]'),
};

// Варіант №1

const onClickCreate = () => {
  const amount = controlsRefs.input.valueAsNumber;
  if (!amount) {
    return;
  }
  createBoxes(amount);
};

const createBoxes = (amount) => {
  const basicSizeOfBox = 30;
  for (let i = 0; i < amount; i += 1) {
    const sizeOfBox = basicSizeOfBox + i * 10;
    const boxEl = document.createElement('div');
    boxEl.style.cssText = `height:${sizeOfBox}px; width:${sizeOfBox}px; background-color: ${getRandomHexColor()};`;

    boxesEl.append(boxEl);
  }
};

const destroyBoxes = () => {
  boxesEl.textContent = '';
};

// Варіант №2

// const onClickCreate = () => {
//   const amount = controlsRefs.input.valueAsNumber;
//   if (!amount) {
//     return;
//   }
//   const markup = createBoxes(amount);
//   console.log(markup);
//   updatePage(markup);
// };

// const createBoxes = (amount) => {
//   const markup = [];
//   const basicSizeOfBox = 30;
//   for (let i = 0; i < amount; i += 1) {
//     const sizeOfBox = basicSizeOfBox + i * 10;
//     const divEl = `<div style='height:${sizeOfBox}px; width:${sizeOfBox}px; background-color: ${getRandomHexColor()};'></div>`;
//     markup.push(divEl);
//   }

//   return markup.join('');
// };

// function updatePage(markup) {
//   boxesEl.insertAdjacentHTML('afterbegin', markup);
// }

// const destroyBoxes = () => {
//   boxesEl.textContent = '';
// };

controlsRefs.create.addEventListener('click', onClickCreate);
controlsRefs.destroy.addEventListener('click', destroyBoxes);
