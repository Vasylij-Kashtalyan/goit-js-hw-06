const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEll = document.querySelector('#ingredients');

const makeIngredientsEllement = (elements) => {
  return elements.map(element => {
  
    const ingridEll = document.createElement('li');
    ingridEll.classList.add('item');
    ingridEll.textContent = element;
  
    return ingridEll;

  });
};

const elements = makeIngredientsEllement(ingredients)
ingredientsEll.append(...elements);
console.log(elements);