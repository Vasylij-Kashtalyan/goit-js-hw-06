














const inputFont = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

const onInputFontSize = (event) => {
    spanText.style.fontSize = event.currentTarget.value + 'px';
}
inputFont.addEventListener('input', onInputFontSize);
console.dir(spanText.style);