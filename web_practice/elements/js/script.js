'use strict';

const box =  document.getElementById('box'),
      circles = document.getElementsByClassName('circle'),
      btns = document.getElementsByTagName("button"),
      oneHeart = document.querySelector('.heart'),
      hearts = document.querySelectorAll(".heart");
      

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

document.body.append(div);