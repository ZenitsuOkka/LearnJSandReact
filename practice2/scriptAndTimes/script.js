const btn = document.querySelector('.btn');\

btn.addEventListener('click', () => {
    const timeeId = setTimeout(logger, 2000);

}); 

// clearInterval(timeeId);

function logger() {
    console.log('Text')
};