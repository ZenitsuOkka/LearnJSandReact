'use strict';

//функция может вызываться 4 разными способами в зависимости от контекста
function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this)
        return a + b;
    }
    console.log(sum());
}
showThis(4, 5);

// 1) Oбычная функция this = window, но если 'use strict'; - undefined