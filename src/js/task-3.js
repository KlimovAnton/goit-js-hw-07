const userName = document.querySelector(`#name-input`)
const userValue = document.querySelector(`#name-output`)

function inputHandler(event) {
    userValue.textContent = event.target.value
    if (!userValue.textContent || !userValue.textContent.trim()) {
        return (userValue.textContent = `Anonymous`)
    }
}

userName.addEventListener(`input`, inputHandler)    