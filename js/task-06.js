













const input = document.querySelector('#validation-input');
const onInput = (event) => {

  event.currentTarget.value.length === Number(input.dataset.length)   
    ? input.setAttribute('class', 'valid')
    : input.setAttribute('class', 'invalid');
  console.log(event.currentTarget.value.length)
};
input.addEventListener("blur", onInput);