const btn = document.querySelector("button");

// btn.onclick = function() {
//     alert("Click1");
// }

// btn.addEventListener('click', () => {
//     alert('Click2')
// });

btn.addEventListener('mouseenter', (e) => {
    console.log(e.target);
    e.target.remove();
});