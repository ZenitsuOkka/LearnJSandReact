'use strict';

const box = document.querySelector('.box'),
      btn = document.querySelector('button');

// const width = box.clientWidth;
// const height = box.clientHeight;

// const width = box.offsetWidth;
// const height = box.offsetHeight;

const width = box.scrollWidth;
const height = box.scrollHeight;


// btn.addEventListener('click', () => {
//     box.style.height = box.scrollHeight + 'px';
// });

// btn.addEventListener('click', () => {
//     if (box.style.height = box.scrollHeight + 'px') {
//         box.style.height = box.offsetHeight +'px';
//     }
// });
function once() {
    box.style.height = box.scrollHeight + 'px';   
};

btn.addEventListener("click", once);

const style = window.getComputedStyle(box);

console.log(style.display);


// console.log(width, height);

// console.log(box.getBoundingClientRect());

window.scrollBy(0, 400);
window.scrollTo(0, 400);

