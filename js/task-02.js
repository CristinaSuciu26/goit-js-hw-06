const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulList = document.querySelector("#ingredients");
console.log(ulList);


for (let i = 0; i < ingredients.length; i++) {
  const createLiTag = document.createElement('li');
  createLiTag.innerText = ingredients[i];
  createLiTag.classList.add("item");
  ulList.appendChild(createLiTag);
}

