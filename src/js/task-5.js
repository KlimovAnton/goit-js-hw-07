function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyElement = document.querySelector(`body`)
const colorText = document.querySelector(`.color`)
const buttonElement = document.querySelector(`.change-color`) 

function changeColor(){
  colorText.textContent = getRandomHexColor()
  bodyElement.style.background = colorText.textContent
}
buttonElement.addEventListener(`click`, changeColor)



