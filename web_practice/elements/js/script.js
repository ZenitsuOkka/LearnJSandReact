'use strict';

const box =  document.getElementById('box'),
      circles = document.getElementsByClassName('circle'),
      btns = document.getElementsByTagName("button"),
      oneHeart = document.querySelector('.heart'),
      hearts = document.querySelectorAll(".heart"),
      wrapper = document.querySelector('.wrapper');
      

// box.style.backgroundColor = 'green';
// box.style.width = '400px';

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'green';
// }

// hearts.forEach(item => {
//     item.style.backgroundColor = 'black';
// });

const div = document.createElement('div');

// const text = document.createTextNode('Hello Andrej');

div.classList.add('black');

document.body.append(div);//добавление нового елемента в конец кода



// wrapper.prepend(div);//поднимает блок над последним

// hearts[0].before(btns[0]);

circles[0].remove();//удаление эелемента

hearts[2].replaceWith(circles[1]);

div.innerHTML = '<h1>Hello</h1>';  