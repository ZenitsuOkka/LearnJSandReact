'use strict';

//filter

const names = ['andrey', 'Ana', 'Aleksander', 'Yuri', 'Voldemart'];

const shortNames = names.filter(function(name) {
    return name.length < 5;
});

console.log(shortNames);