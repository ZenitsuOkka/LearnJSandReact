'use strict';

const persone = {
    name: 'Alex',
    tel: '0997349056'
};  

// console.log(JSON.stringify(persone));
console.log(JSON.parse(JSON.stringify(persone)));
