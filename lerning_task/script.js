

let x = 5; alert ( x++ ); //В постфиксной форме х будет 5
let x = 5; alert ( ++x ); //В префиксной форме х будет 6

[] + false + null + true // когда мы работаем с путым масивом мы приводим данные к строке, результат "NaN"(not a number)

let y = 1; 
let x = y = 2; //присваивание идет с права на лево
alert(x);//2

[] + 1 + 2 // '"12"

alert("1"[0]);//1 мы обращаемся к первому элементу нашей строки по индексу 0

2 && 1 && null && 0 && undefined; //null оператор И && идет с лева на право и возвращает первое ложное значение

console.log(!!(a&&b)===(a&&b)); //false !!превращает значение в булиновое а значит они не равны!!

alert(null || 2 && 3 || 4); // приоритер и && выше чем проритет или || а значит остается 3, оператор ИЛИ ||запинается на правде а значит тоже возвращает 3

(a = [1, 2, 3]) == (b = [1, 2, 3]); // false это две разные переменные с двумя разнми индексами

alert( 1 + "infinity"); // 1Infinity если в выржении хотя бы одна переменна строка то все выражение правращается в строку
alert( +"infinity"); // Infinity оператор + преобразует строку в число если это возможно

"Ёжик" > "Яблоко"// false сравнивает по символам

0 || "" || 2 || undefined || true || folse // 2 ИЛИ || fзпинается на правде 



