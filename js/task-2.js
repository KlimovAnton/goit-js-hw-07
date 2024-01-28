const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url:
      'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url:
      'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Geeen and Orange Parrot',
  },
  {
    url:
      'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
  },
];

const galleryEl = document.querySelector(`.gallery`)

// images.forEach(image => {
//   const imgEl = document.createElement(`img`)
//   imgEl.src = image.url;
//   imgEl.alt = image.alt;
//   imgEl.width = 640;
//   imgEl.height = 400;

//   const liEl = document.createElement(`li`)
//   console.log(liEl)
//   liEl.append(imgEl)
//   galleryEl.append(liEl)
// })

// 33-44 строки, це костиль, так?

  images.forEach(image => {
    const listEl = document.createElement(`li`)
  
    listEl.innerHTML = `
    <img src = ${image.url} 
    alt = ${image.alt}
    width = 640
    height = 400>`
  
  
    galleryEl.append(listEl)
  })




// const makeListGalleryFn = (img) => {

//   const {
//     url,
//     alt
//   } = img
  
//   return `
//     <li class="gallery-list">
//       <img src="${url}" width="640" height="400">
//       <alt="${alt}">
//     </li>
//   `
// }

// const addgalleryEl = images.map(makeListGalleryFn)
//   .join('');

// galleryEl.insertAdjacentHTML(`beforeend`, addgalleryEl)