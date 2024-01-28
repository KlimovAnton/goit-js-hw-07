const loginFormUser = document.querySelector(`.login-form`);

function formHandler(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    if(!email || !password) {
        alert(`All form fields must be filled in`)
    }
    const data = {
        email: event.target.email.value.trim(),
        password: event.target.password.value.trim()
    }
    console.log(data)
    loginFormUser.reset()
}

loginFormUser.addEventListener(`submit`, formHandler)