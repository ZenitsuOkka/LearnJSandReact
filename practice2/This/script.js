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

// function User(name, id) {
//     this.name = name;//this обозначает что у каждого нового обьекта будет свое значение имени и идентификатора
//     this.id = id;
//     this.human = true;//после использования такого синтаксиса наша функция стало конструктор и с помощью его мы можем создаватьновые обьекты
// }

// let ivan = new User('Ivan', 23)

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'john'
// };

// sayName.call(user, 'Smith');//не создает новую функцию а устанавливает контекст
// sayName.apply(user, ['Orlov']);

// function count(num) {
//     return this*num;
// }

// const double = count.bind(2);//создает новую функцию

// console.log(double(5));


// 1) Oбычная функция this = window, но если 'use strict'; - undefined
// 2) Контекст у методов обьекта это будет сам обьект
// 3) This в конструкторах и ассах - это новый экземпляр  обьекта 
// 4) Ручное присвоение this call, apply, bind

const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    this.style.backgroundColor = 'red';
});
//Когда обработчик событий который идет как кол бек функция написан в класическом режиме через функцию() контекст вызовы будет сам елемент 

//у стрелочной функции нет своего контекста вызова она берет его у  воего родителя

const obj = {
    num: 5,
    sayName: function() {
        const say = () => {
            console.log(this);
        };
        say();
    }
}

obj.sayName();