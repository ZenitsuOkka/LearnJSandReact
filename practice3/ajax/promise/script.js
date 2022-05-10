'use strict';

console.log('zapros dannuh')

setTimeout(() => {
    console.log('podgotovka dannuh');

    const product = {
        name: 'tee',
        price: 100
    };

    setTimeout(() => {
        product.status = 'order';
        console.log(product);
    }, 2000);
}, 2000);
