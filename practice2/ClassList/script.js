const btns = document.querySelectorAll('button');

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

