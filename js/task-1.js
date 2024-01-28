const listElAll = document.querySelectorAll('.item');

console.log(`Number of categories`, listElAll.length)

listElAll.forEach((element) => {
    console.log(`Category`, element.firstElementChild.textContent)
    console.log(`Category:`, element.lastElementChild.children.length)
})

