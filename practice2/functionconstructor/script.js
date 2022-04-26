'use strict';

// const num = new Number(3); 
// const num1 = new Function(3); 

// console.log(num)
// console.log(num1)



// class User {
//     constructor User(name, id) {
//         this.name = name;//this обозначает что у каждого нового обьекта будет свое значение имени и идентификатора
//         this.id = id;
//         this.human = true;//после использования такого синтаксиса наша функция стало конструктор и с помощью его мы можем создаватьновые обьекты
//     }
//     hello() {
//         console.log(`Hello ${this.name}`)
//     }
//     exit() {
//         console.log(`Пользователь ${this.name} ушел`);
//     }

// }

// User.prototype.exit = function() {
//     console.log(`Пользователь ${this.name} ушел`);
// };


const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

console.log(alex);
console.log(ivan);

ivan.hello();
alex.hello();

ivan.exit();

