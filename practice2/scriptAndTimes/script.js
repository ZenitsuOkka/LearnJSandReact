const btn = document.querySelector('.btn');
let timerId;  

btn.addEventListener('click', () => {
    // const timeeId = setTimeout(logger, 2000);
    const timerId = setInterval(logger, 2000);

}); 

clearInterval(timeeId); 

function logger() {
    console.log('Text')
};