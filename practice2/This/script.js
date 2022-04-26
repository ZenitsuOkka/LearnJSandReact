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

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };

// obj.sum();

function User(name, id) {
    this.name = name;//this обозначает что у каждого нового обьекта будет свое значение имени и идентификатора
    this.id = id;
    this.human = true;//после использования такого синтаксиса наша функция стало конструктор и с помощью его мы можем создаватьновые обьекты
}

let ivan = new User('Ivan', 23)

// 1) Oбычная функция this = window, но если 'use strict'; - undefined
// 2) Контекст у методов обьекта это будет сам обьект