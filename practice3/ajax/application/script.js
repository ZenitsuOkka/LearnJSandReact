'use strict';

// new RegExp('pattern', 'flags');
// /pattern/f

// const ans = prompt('Your name?');

const reg = /n/ig;
// i
// g
// m

// console.log(ans.match(reg));
const pass = prompt('Your password?');

console.log(pass.replace(/./, "*"));

