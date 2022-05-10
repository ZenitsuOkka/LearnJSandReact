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
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            resolve(product);
        }, 2000);
    }).then(data => {
        data.modify = true;
        return data;
    }).then((data) => {
        console.log(data);

    });

    
});



