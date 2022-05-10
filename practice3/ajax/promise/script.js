'use strict';

console.log('zapros dannuh')

const req = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('podgotovka dannuh');
    
        const product = {
            name: 'tee',
            price: 100
        };
    
        resolve(product);
    }, 2000); 
});

req.then((product) => {
    const req2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            resolve(product);
        }, 2000);
    });

    req2.then(data => {
        console.log(data);
    });
});



