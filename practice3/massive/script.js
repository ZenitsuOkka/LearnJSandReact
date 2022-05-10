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

const per = [5, 6, 'andrey'];

console.log(per.some(item => typeof(item) === 'number'));

console.log(per.every(item => typeof(item) ==='number'));