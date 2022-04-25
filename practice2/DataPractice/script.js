'use strict';

const now =  new Date('0200-04-25');
new Date.parse('0200-04-25')
// console.log(now)

// console.log(now.getFullYear());

// console.log(now.getMonth());

// console.log(now.getDay());

//0 воскресенье 

//метожы set

console.log(now.setFullYear(200));
console.log(now)

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;

}

let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд`);



