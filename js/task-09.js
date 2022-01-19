










const bodyColor = document.body;
const spanColor = document.querySelector('.color');
const btnColor = document.querySelector('.change-color');


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onClickColor() {

  spanColor.textContent = getRandomHexColor();
  bodyColor.style.backgroundColor = getRandomHexColor();

}
btnColor.addEventListener('click', onClickColor);
