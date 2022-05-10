'use strict';

//filter

// const names = ['andrey', 'Ana', 'Aleksander', 'Yuri', 'Voldemart'];

// const shortNames = names.filter(function(name) {
//     return name.length < 5;
// });

// console.log(shortNames);

//map

// let answer = ['AnnnA', 'PeTR', 'YukLa'];

// answer = answer.map(item => item.toLowerCase());

// console.log(answer);


// const answer = ['AnnnA', 'PeTR', 'YukLa'];

// const result = answer.map(item => item.toLowerCase());

// console.log(result);

// every/some

// const per = [5, 6, 'andrey'];

// console.log(per.some(item => typeof(item) === 'number'));

// console.log(per.every(item => typeof(item) ==='number'));


// reduce

// const arr = [1, 22, 5, 6, 8, 12];
//                             // 0       1
//                             // 1       22
//                             // 23      5
//                             // 28      6
//                             // 34      8
//                             // 42      12
//                             // 54      0

// const result = arr.reduce((sum, current) => sum + current);

// console.log(result)

// const arr = ['1, 22, 5, 6, 8, 12', 'apple', 'yellow'];

// const result1 = arr.reduce((sum, current) => sum + ', '+ current);
// const result2 = arr.reduce((sum, current) => `${sum}, ${current}`);


// console.log(result1)
// console.log(result2)


const obj = {
    ivan: 'persone',
    andrey: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArr);
