'use strict';

// console.log('zapros dannuh')

// const req = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log('podgotovka dannuh');
    
//         const product = {
//             name: 'tee',
//             price: 100
//         };
    
//         resolve(product);
//     }, 2000); 
// });

// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//         }, 2000);
//     }).then(data => {
//         data.modify = true;
//         return data;
//     }).then((data) => {
//         console.log(data);
//     }).catch(() => {
//         console.error('proizoshla oshubka');
//     }).finally(() => {
//         console.log('finaly')
//     });    
// });

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};
test(1000).then(() => console.log("1000ms"));
test(2000).then(() => console.log("2000ms"));



