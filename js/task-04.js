const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

const counterValueEl = document.querySelector('#value');
let counterValue = 0;

const handleClickDecrementBtn = () => {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
};
const handleClickIcrementBtn = () => {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
};

decrementBtn.addEventListener('click', handleClickDecrementBtn);
incrementBtn.addEventListener('click', handleClickIcrementBtn);
