/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/


// Код возьмите из предыдущего домашнего задания


'use strict';


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    geners: [],
    privat: false,
    start: function() {
        personalMovieDB.count = prompt("сколько фильмов вы посмотрели?", '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt("сколько фильмов вы посмотрели?", '');
        }
    },
    rememderMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt("один из последний просмотренных фильмов?", ''), 
                  b = +prompt("оцените фильм от 1 до 10?", '');
            
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log("Done");
            } else {
                console.log('error');
                i--;
            }
        
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено мало фильмов')
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель')
        } else if (personalMovieDB.count >= 30 && personalMovieDB.count <= 100) {
            console.log('Вы киноман')
        } else {
            console.log('Произошла ошибка')
        }
    },
    showMyDB: function(hidden) {
        if(!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            const moovieGeners = prompt(`Ваш любимый жанр под номером ${i}`, '');
            personalMovieDB.geners[i - 1] = moovieGeners;
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB. privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }

};



