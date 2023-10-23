

const listOfCategories = document.querySelectorAll('#categories > .item');
console.log(`Number of categories: ${listOfCategories.length}`);

const categories = document.querySelectorAll('#categories > .item');
categories.forEach(category => {
  const title = category.querySelector('h2').innerText;
  const elements = category.querySelectorAll('li').length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements}`);
});






 

  

