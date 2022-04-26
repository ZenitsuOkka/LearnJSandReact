'use strict';

const box = document.querySelector('.box');

// const width = box.clientWidth;
// const height = box.clientHeight;
const width = box.offsetWidth;
const height = box.offsetHeight;

console.log(width, height);
