/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// const promoBanners = document.querySelectorAll('.promo__adv');

// promoBanners[0].remove();

const adv = document.querySelectorAll('.promo__adv img'),
      changeGenre = document.querySelector('.promo__genre'),
      changeBg = document.querySelector('.promo__bg');


            //колбек функция стрелочная
adv.forEach(item => {
    item.remove();
});
// adv.forEach(function(item){
//     item.remove();
// });
changeGenre.textContent = 'Драма';


changeBg.style.backgroundImage = "url('img/bg.jpg')";