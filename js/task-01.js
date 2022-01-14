















const categoriesEll = document.querySelectorAll('ul#categories li.item');
const numberCatItemEll = categoriesEll.length
console.log(`Number of categories: ${numberCatItemEll}`);

 
const allElementCategories = categoriesEll.forEach((titleCategories) => {
    
  const titleEll = titleCategories.firstElementChild.textContent;
  console.log(`Categories: ${ titleEll }`);

  
  const numberOfEll = titleCategories.querySelectorAll('li');
  console.log(`Elements: ${numberOfEll.length}`)

});