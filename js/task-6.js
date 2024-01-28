//После нажатия на кнопку Create 
// должна рендериться (добавляться в DOM) 
// коллекция с соответствующим количеством элементов и 
// очищаться значение в инпуте.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnElements = document.querySelectorAll(`#controls button`)
console.log(btnElements[0])
console.log(btnElements[1])

// const amount = document.querySelector(`#controls input`)
// console.log(amount.value)

const divElement = document.querySelector(`#boxes`)
// console.log(divElement)

const amount2 = document.querySelector(`#controls input`)
console.log(amount2)

btnElements[0].addEventListener(`click`, (e) => {
  e.preventDefault();
  const amount = document.querySelector('#controls input').value
  createBoxes(amount)
})


function createBoxes(amount) {
  
  if(amount <= 100 && amount > 0) {
  for (let i = 0; i < amount; i++) {
    const divMake = document.createElement(`div`)
    const divMakeColor = getRandomHexColor();
    divMake.classList = `square`;
    divMake.style.width = `${30+10*i}px`;
    divMake.style.height = `${30+10*i}px`;
    divMake.style.backgroundColor = `${divMakeColor}`;
    divElement.appendChild(divMake);
    // console.log(divMake)
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
  const squareBoxes = document.querySelectorAll(`.square`)
  for (const box of squareBoxes) {
    box.remove()
  }
}

btnElements[1].addEventListener(`click`, destroyBoxes)