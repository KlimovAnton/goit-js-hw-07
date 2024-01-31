function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector(`button[data-create]`)
const btnDestroy = document.querySelector(`button[data-destroy]`)
const divElement = document.querySelector(`#boxes`)


btnCreate.addEventListener(`click`, (e) => {
  e.preventDefault();
  const amount = document.querySelector('#controls input').value
  createBoxes(amount)
})


function createBoxes(amount) {
  destroyBoxes() 
  if(amount <= 100 && amount > 0) {
  for (let i = 0; i < amount; i++) {
    const divMake = document.createElement(`div`)
    const divMakeColor = getRandomHexColor();
    divMake.classList.add(`square`);
    divMake.style.width = `${30+10*i}px`;
    divMake.style.height = `${30+10*i}px`;
    divMake.style.backgroundColor = `${divMakeColor}`;
    divElement.appendChild(divMake);
  }} 
    else {
      alert(`
      Amount should be from 1 until 100
      You can try again
    `)
  }
  document.querySelector('#controls input').value = ''
}

function destroyBoxes() {
  divElement.innerHTML = ``
}

btnDestroy.addEventListener(`click`, destroyBoxes)