'use strict';

//функция может вызываться 4 разными способами в зависимости от контекста
// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this)
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4, 5);

const obj = {
    a: 20,
    b: 15,
    sum: function() {
        function shout() {
            console.log(this);
        }
        shout();
    }
};

obj.sum();

// 1) Oбычная функция this = window, но если 'use strict'; - undefined
// 2) Контекст у методов обьекта это будет сам обьект