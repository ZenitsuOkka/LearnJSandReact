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

class ColoredReactangleWithText extends Reactangle {
    constructor(height, width, text, bgColor) {
        super(height, width);//Вызывает суперконструктор родител
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Text: ${this.text}, color: ${this.bgColor}`);
    }
}

const square = new Reactangle(10, 10); 
const long = new Reactangle(20, 100); 

const div = new ColoredReactangleWithText(25, 10, 'Andrey', 'red');

console.log(square.calcArea())
console.log(long.calcArea())
