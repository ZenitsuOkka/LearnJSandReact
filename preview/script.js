const btn = document.querySelector("button");

// btn.onclick = function() {
//     alert("Click1");
// }

// btn.addEventListener('click', () => {
//     alert('Click2')
// });

const deleteElement = (e) => { //очень важно называть переменную Element
    e.target.remove();
};

btn.addEventListener('click', deleteElement);
btn.removeEventListener('click', deleteElement);
