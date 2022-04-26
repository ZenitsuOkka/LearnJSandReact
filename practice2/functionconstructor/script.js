'use strict';

// const num = new Number(3); 
// const num1 = new Function(3); 

// console.log(num)
// console.log(num1)

function User(name, id) {
    this.name = name;//this обозначает что у каждого нового обьекта будет свое значение имени и идентификатора
    this.id = id;
}
