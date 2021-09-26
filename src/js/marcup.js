// console.log('START marcup.js');

import foodsTmpl from '../templates/gallery-items.hbs';
import galleryItems from '../js/menu.json';

const listRef = document.querySelector('.js-menu');

const markup = createFoodsMarkup(galleryItems);

listRef.insertAdjacentHTML('beforeend', markup);

// console.log('foodsTmpl', foodsTmpl);
// console.log('listRef', listRef);

function createFoodsMarkup(foods) {
  return foodsTmpl(foods);
  // return foods.map(foodsTmpl).join('');
}

// const tagListRef = document.querySelector('.tag-list');
// console.log(tagListRef);
// console.log('END marcup.js');
