'use strict';

const box =  document.getElementById('box');

console.log(box);

const btns = document.getElementsByTagName("button");//получили псевдо массив

console.log(btns[1]);

const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll(".heart");

hearts.forEach(item => {
    console.log(item);
})

const oneHeart = document.querySelector('.heart');//метод возвращает первый эелемент такого селектора

console.log(oneHeart);
//методы querySelector и getElementById возвращают один элемент
//методы querySelectorAll, getElementsByTagName возвращают псевдомассив
