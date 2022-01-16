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
];
 
const listGallery = document.querySelector('ul.gallery');

const makeGalary = images.map(({ url,alt }) => {
  
  const itemEll = document.createElement('li');
  itemEll.classList.add('galery-item')
  itemEll.insertAdjacentHTML("beforeend", `<img src="${url}", alt="${alt}" width=400>`);

  return itemEll
  
});
listGallery.append(...makeGalary)
console.log(itemEll)

// const makeImageEll = (elements) => {
//   return elements.map(element => {

//     const itemEll = document.createElement('li');
//     const imagesEll = document.createElement('img');
//     itemEll.append(imagesEll);
//     imagesEll.src = element.url;
//     imagesEll.alt = element.alt;
//     imagesEll.width = 80;
//     imagesEll.height = 80;

//     return itemEll;

//   });
// };

// const allElements = makeImageEll(images);
// const galleryEll = listGallery.append(...allElements);
// console.log(listGallery)

