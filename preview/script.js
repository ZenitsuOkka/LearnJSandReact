const btn = document.querySelector("button"),
      overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert("Click1");
// }

// btn.addEventListener('click', () => {
//     alert('Click2')
// });

// const deleteElement = (e) => { //очень важно называть переменную Element
//     e.target.remove();
// };

const deleteElement = (e) => { //очень важно называть переменную Element
    console.log(e.target);
    console.log(e.type);

};

btn.addEventListener('click', deleteElement);
// btn.removeEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);
