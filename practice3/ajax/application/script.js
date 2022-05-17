'use strict';

// new RegExp('pattern', 'flags');
// /pattern/f

const ans = prompt('Your name?');

const reg = /n/i;
// i
// g
// m

console.log(ans.match(reg));
