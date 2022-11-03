const listWithId = document.querySelector(`#categories`);
const listOfCategories = listWithId.querySelectorAll(`.item`);

const numberOfCategories = `Number of categories: ${listOfCategories.length}`;
console.log(numberOfCategories);

listOfCategories.forEach((item) => {
  console.log(item.firstElementChild.textContent);
  console.log(item.lastElementChild.children.length);
});
