'use strict';

console.log('zapros dannuh')

const req = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('podgotovka dannuh');
    
        const product = {
            name: 'tee',
            price: 100
        };
    
        resolve();
    }, 2000); 
});

req.then(() => {
    console.log('dannnue poluchenu')
});

setTimeout(() => {
    product.status = 'order';
    console.log(product);
}, 2000);

