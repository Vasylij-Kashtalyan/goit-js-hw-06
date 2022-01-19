











const form = document.querySelector('.login-form');

function onFormSubmit(event) {
    event.preventDefault();
    
    const formElements = event.currentTarget.elements;
    const formEmail = formElements.email.value;
    const formPassword = formElements.password.value;

    if (formEmail === '' || '' ===  formPassword) {
        return alert('Form is not filled');
    } else {
        const email = formElements.email.value;
        const password = formElements.password.value;
        const formData = { email, password };

        console.log(formData);
    }
    form.reset()
}
form.addEventListener('submit', onFormSubmit);
