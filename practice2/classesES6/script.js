'use strict';
//Класс это воего орода шаблон который будет использоваться много раз
//Свойство конструктор конструирует войства и возможности класса
class Reactangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea(){//мeтод класс
        return this.height * this.width;
    }
}

const square = new Reactangle(10, 10); 

console.log(square.calcArea())