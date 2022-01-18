







    

const refs = {
btnDecrement: document.querySelector('#counter [data-action="decrement"]'),
spanValue: document.querySelector('#value'),
btnIncrement: document.querySelector('#counter [data-action="increment"]')
};

refs.btnDecrement.addEventListener('click', onbtnDecrementClick);
refs.btnIncrement.addEventListener('click', onbtnIncrementClick);

function onbtnDecrementClick() {
   coruentValue = refs.spanValue.textContent--;
};
function onbtnIncrementClick() {
  coruentValue = refs.spanValue.textContent++;
};

let coruentValue = 0;
console.log(coruentValue)