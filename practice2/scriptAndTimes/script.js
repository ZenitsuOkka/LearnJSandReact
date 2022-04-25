const btn = document.querySelector('.btn');
let timerId;  
    i = 0;


function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10)
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
};
btn.addEventListener('click', myAnimation);

// // clearInterval(timeeId); 

// function logger () {
//     if (i === 3) {
//         clearInterval(timerId);
//     }
//     console.log('Text')
//     i++;
// };

// let id = setTimeout(function log() {
//     console.log('hello');
//     id = setTimeout(log, 500);
// }, 500);

//сетТаймаунт лучше потому что они ждут каждые свои время в отличии от интервала