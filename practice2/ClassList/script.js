const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');
// console.log(btns[0].classList.length)
// console.log(btns[0].classList.item(1));
// console.log(btns[1].classList.add('red'));//позволяет менять класы на странице
// console.log(btns[0].classList.remove('blue'));//удаляет класс
// console.log(btns[0].classList.toggle('blue'));//если класса нет он его добаляет если класс есть он его удаляет (переключатель)

// if (btns[1].classList.contains('red')) {
//     console.log('red');
// };

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }

    btns[1].classList.toggle('red');
});

wrapper.addEventListener('click', (event) => {
    // console.dir(event.target);
    if (event.target && event.target.matches("button")) {
        console.log('Hello')
    }
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);


//делегирований событий очень полезная функия при работе с ДОМ деревом