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

// const logger = function() {
//     console.log("Hello");
// };
// logger();

//стрелочные функции 

// const calc = (a, b) => a + b;

//Методы и свойства и чисел

//методы это ввспомогательные функции а свойства это спомогательные значение

// const str = 'text';
// const arr = [1, 2, 3];

// console.log(str.length)
// console.log(arr.length)

// const fruit = 'Some fruit';

// console.log(fruit.indexOf("fruit"))

// const logg = 'Hello world'

// console.log(logg.slice(6));
// console.log(logg.slice(-5, -1));

// console.log(logg.substring(6, 11));

// console.log(logg.substr(6, 5));


// const num = 12.2;
// console.log(Math.round(num));

// const test = '12.2px'
// console.log(parseInt(test));
// console.log(parseFloat(test));

//callback функции 
 
function first() {
    //do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2)
}

first();
second();

function learnJs(lang, callback) {
    console.log(`Я учу ${lang}`)
    callback();
}

learnJs('javascript', function(){
    console.log('Я прошел этот урок!');
});





 


