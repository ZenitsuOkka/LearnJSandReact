// if (4 == 4) {
//     console.log('ok')
// } else {
//     console.log("error")
// }

// const num = 50;

// if (num < 49) {
//     console.log("error");
// } else if (num > 100) {
//     console.log('Mnogo');
// } else {
//     console.log("ok ");
// }

// (num === 50) ? console.log("ok ") : console.log("error");

// const num = 50;

// switch (num) {
//     case 49:
//         console.log("Error")
//         break;
//     case 100: 
//         console.log('Erorr')
//         break;
//     case 50:
//         console.log('Ok')
//         break;
//     default: 
//         console.log("NOt this time")
//         break;
// }
// //условия 

//Cycls

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// } 
// while (num <= 55);

// for (let i = 1; i < 8; i++) {
//     console.log(i);
// }

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }   
//     console.log(i);
// }

//функции
// function showFirstMessage(text) {
//     console.log(text)
// }

// showFirstMessage("Hello");

// function calc (a, b) {
//     return (a + b);
// } 

// console.log(calc(4, 3));

// function ret() {
//     let num = 25;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

//function expression

const logger = function() {
    console.log("Hello");
};
logger();