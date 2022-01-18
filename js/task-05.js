














const refs = {
input: document.querySelector('#name-input'),
output: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputName);
refs.output.addEventListener('change', ()=>{});

function onInputName(event) {
    if (refs.output.textContent = event.currentTarget.value) {
    } else {
        refs.output.textContent = "Sensei))"
    }
    console.log(event.currentTarget.value);
};

