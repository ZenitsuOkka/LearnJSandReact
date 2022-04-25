const btn = document.querySelector('.btn');
let timerId;  
    i = 0;

btn.addEventListener('click', () => {
    // const timeeId = setTimeout(logger, 2000);
    timerId = setInterval(logger, 500);

}); 

// clearInterval(timeeId); 

function logger () {
    if (i === 3) {
        clearInterval(timerId);
    }
    console.log('Text')
    i++;
};

// let id = setTimeout(function log() {
//     console.log('hello');
//     id = setTimeout(log, 500);
// }, 500);

//сетТаймаунт лучше потому что они ждут каждые свои время в отличии от интервала