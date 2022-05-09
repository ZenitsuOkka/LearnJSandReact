'use strict';

const inputUah = document.querySelector('.#uah'),
      inputUsd = document.querySelector('.#usd');


inputUah.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
});