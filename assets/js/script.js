// "use strict"; - современный режим в нем работаяют некоторые неточности которые были в старых версиях JS, прописввается только в начале кода

// a =15;
// console.log(a); 
// так можно было записывать в старых версиях JS


// console.log(1);
// let number = 5;
// const leftBorderWith = 1;

// number =10;
// console.log(number);

// const obj = {
// a:50
// };

// obj.a = 10;
// console.log(obj);

// Названия переменных для const которые нельзя менять и лучше придерживаться такого правила их написания
// например:
// const snake_case
// const UPPER_SNEKE_CASE
// const _api_Base

// Задание 1
// let userName = "John";
// let userNumber = 25;

// userNumber = 24;

// console.log(userName + userNumber);



// ТИПЫ ДАННЫХ  JS

// Простые Типы
// Числа 1,2,3
// Строки "strin", "name"
// Логический тип (boolean)
// true,false
// null
// undefined
// Symbol
// Biglnt

// Обьекты
// Спец. Обьекты:
// Массивы []
// Функции function
// Обьект Даты
// Регулярные выражения
// Ошибки

// Обычные обьекты


// const obj = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };

// length - является свойством объекта функции и указывает, сколько аргументов ожидает функция, то есть, количество формальных параметров
// push - добавляет неограниченное количество элементов в конец массива

// console.log(obj.name); первый способ вывода в консоль
// console.log(obj["name"]); 


// let arr = ["plum.png", "orange.jpg", 6, "apple.bmp", {обьект}, [массив]] Класический массив
// console.log(arr[1]) чтобы вывести с массыва какойто обьект мы должны указать номер под которым он лежит
//                     нумерация начинается с нуля тоесть plum.png под номером ноль


// const arr = ['a','b','c']; - массив это перечень информации по порядку

// const arrObj = {  - массив это частный случай обьекта 
//     0: "a",
//     1: "b",
//     2: "c"
// };

// console.log(arr[1]); выведит b
// console.log(arrObj[1]); 


// const obj = {a: 1, b: 2}; - обьекты структура хранения данных в парном формате        

// const obj = {
//    "Anna": 500, ключ это Anna значение 500

//    "Alice": 800
//     Alice: 800 две одинаковые записи
// };

// const arr = ['a','b','c'];
// const arrObj = { 
//     a: 'a',
//     '1': 'b',
//     2: 'c'
// };

// arrObj.b = '1234'; - одинаковые записи
// arrObj['b'] = '1234';

// console.log(arrObj['b']); 
// console.log(arrObj.b); 



// Задание 2

// let storeName = 'Products';
// let storeDescription = {
//     budget: 10000,
//     employees: ['Jon', 'Mark', 'Sava'],
//     products: {
//         apples: 100,
//         orange: 300
//     },
//     open: true    

// };




// ПРОСТОЕ ОБЩЕНИЕ С ПОЛЬЗОВАТЕЛЕМ

// Вся информация которая приходит от пользователя будет ввиде строки

// prompt - показывает сообщение и запрашивает ввод текста от пользователя.
// alert - показывает сообщение.
// confirm - показывает сообщение и ждёт, пока пользователь нажмёт OK или Отмена. Возвращает true, если нажата OK, и false,
//           если нажата кнопка «Отмена» или Esc с клавиатуры


// alert('Hello')

// const result = confirm("Are you here?");
// console.log(result);

// const answer = prompt("Вам есть 18?", "18");
// console.log(typeof(answer)); выведит строку

// const answer = +prompt("Вам есть 18?", "18"); "+" тип данных строка преобразуется в тип данных цифры
// console.log(answer + 5); выведит сумму  чисел

// const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваша фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');
// answers[3] = prompt('Где вы учититесь?', '');

// document.write(answers);





// ИНТЕРПОЛЯЦИЯ(ES6)

// это когда в нутри строки мы можем вставлять переменные

// const category = 'toys';
// console.log('https://someurl.com/' + category);

// интерполяцию мы можем использовать только с косыми кавычками ``
// const category = 'toys';
// console.log(`https://someurl.com/${category}/5`);

// const user = 'Ivan';
// alert(`Привет,${user}`);



// ОПЕРАТОРЫ JS

// console.log('arr' + " - object");
// console.log(4 + " - object");
//  унарный плюс это плюс который ставиться перед чем-то

//  let incr = 10,
//      decr = 10;

// постфиксный      
// incr++;
// decr--;

// префиксный
// ++incr;
// --decr;

// console.log(incr);
// console.log(decr);

// % опетатор деления
// = оператор присваивания
// == оператор равно
// === строгое сравнение
// && оператор "и" возвращает значение true только если все значение true
// || оператор "или" 
// ! оператор "не"
// typeof -  позволяет определить тип параметра (число, строка, объект). 
//           Оператор возвращает строку, содержащую тип ('number', 'string' , 'object' ). 
//           Для null оператор возвращает 'object' (это признанная ошибка языка)

// const isChecked = true,
//       isClose = true;

// console.log(isChecked && isClose);


// ПРАКТИКА

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);



// УСЛОВИЯ

// if(4 == 4) {    условие если 
//     console.log('Ок!');
// } else {
//     console.log('Error');
// }



// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Ok!');
// }


// Тернарный оператор
// (num === 50) ? console.log('Ok!') : console.log('Error');


// const num = 50;

// конструкция
// switch всегда идет на строгое сравнение в отличии от обычных условий
// switch (num) {
//     case 49:
//         console.log('Неверно');
//         break;
//     case 100:
//         console.log('Неверно');
//         break;
//     case 50:
//         console.log('В точку!');
//         break;
//     default:
//         console.log('Не в этот раз!');
//         break;    
// }





// ЛОГИЧЕСКИЕ ОПЕРАТОРЫ


// const hamburger = 3;
// const fries = 1;

// if (hamburger === 3 && fries) {         hamburger === 3 - эта часть кода будет выполняться первой так как у оператора === (строгое равно) приоритет по выполнению    &&& (и) этот оператор будет выполняться вторым
//     console.log('Все сыты!');                             мы сравниваем сколько должно быть hamburger
// } else {
//     console.assert.log('Мы уходим');
// }


// оператор и (&&) всегда возвращает первое ложное значение если оно есть на нем код останавливается и дальше код не идет
//                 если все аргументы верны и код дошел до конца то возвращается значение последнего аргумента
                
//                 и (&&) запинается на лжи 
//                 или (||) запинается на правде



// const hamburger = 3;
// const fries = 0;
// const cola = 0;

// if (hamburger || cola || fries) {       как только оператор или (||) находит правду он перестает работать
//     console.log('Все сыты!');
// } else {
//     console.assert.log('Мы уходим');
// }



// let johnReport, alexReport, samReport, mariaReport = 'done';

// console.log(johnReport || alexReport || samReport || mariaReport);
// оператор или вернул правду даже если она стоит в конце списка


// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola ===2 || fries === 3 && nuggets) {
//     console.log('Все сыты!');
// } else {
//     console.assert.log('Мы уходим');
// }

// console.log(hamburger === 3 && cola ===2 || fries === 3 && nuggets);
// ответ 
// Все сыты!
// 2


// console.log( 5 === 5 && 3 > 1 || 5);
// сначала выполняется 3 > 1 у оператора больше приоритет перед другими операторами
// потом выполняется строгое равенство 5 === 5
// потом выполняется логическое И '&&'
// и в последний момент выполняется оператор ИЛИ '||'
// ответ будет 'true'






// ЦИКЛЫ

// Цикл «while»
// let i = 0;
// while (i < 3) { // выводит 0, затем 1, затем 2
//   alert( i );
//   i++;
// }


// Цикл «do…while»
// let i = 0;
// do {
//   alert( i );
//   i++;
// } while (i < 3);


// Цикл «for»
// for (let i = 0; i < 3; i++) { // выведет 0, затем 1, затем 2
//     alert(i);
// }


// break полностью прекращает выполнение цикла, отличная штука для тех ситуаций, когда условие, по которому нужно прерваться, находится не в начале или конце цикла, а посередине или даже в нескольких местах его тела
// continue прекращает (перепрыгивает) выполнение тела цикла и передаёт управление на следующую итерацию for



// while – Проверяет условие перед каждой итерацией.
// do..while – Проверяет условие после каждой итерации.
// for (;;) – Проверяет условие перед каждой итерацией, есть возможность задать дополнительные настройки.



// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {

//     for ( let j = 0; j<i; j++) {
//         result += '*';
//     }

//     result += '\n';
// }

// console.log(result);








// Задачи:

//     1, При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой

// for (let i = 5; i < 11; i++) {
//     console.log(i);
// }

//   2,  При помощи цикла for вывести числа от 20 до 10 в консоль. 
// В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл

// for (let i = 20; i > 10; i--) {

//    if (i === 13) { 
//     break;
//    }

//     console.log(i);

// }

//   3,  При помощи цикла for выведите чётные числа от 2 до 10 включительно

// for (let i = 2; i <= 10; i++) {

//     if (i % 2 === 0) {

//         console.log(i);
//     }

// }

//   4,  Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. 
// Не создайте бесконечный цикл! Иначе браузер может зависнуть.

//          Цикл, который нужно переписать:
//          
        //  for (let i = 2; i <= 16; i++) {
        //      if (i % 2 === 0) {
        //          continue;
        //      } else {
        //          console.log(i);
        //      }
        //  }


// let i = 2;

// while (i <= 16) {

    
//     if (i % 2 === 0) {
//         i++;
//         continue;
//     } else {
//         console.log(i);
//     }
//     i++;
// }

//   5,  Заполните массив цифрами от 5 до 10 включительно. 
// Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

// const arrayOfNumbers = [];

// for (let i = 5; i < 11; i++) {
//     arrayOfNumbers.push(i);
    
// }
    
// console.log(arrayOfNumbers);
    
// второй вариант
// const arrayOfNumbers = [];

// for (let i = 5; i < 11; i++) {
//     arrayOfNumbers[i - 5] = i;
// }

// console.log(arrayOfNumbers);

// Задачи:

//    1 Заполните новый массив (result) числами из старого (arr).
//  Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
//     Должен получиться точно такой же массив

    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    for (let i = 0; i < arr.length; i++) {

            result [i] = arr[i];
    }
    console.log(result);



//    2 Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
//     Для определения типа данных используйте typeof();
//     Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

    const data = [5, 10, 'Shopping', 20, 'Homework'];
    
    for (let i = 0; i < data.length; i++) {
        if (typeof(data[i]) === 'number') {
            data [i] == data[i] * 2;
        } else if (typeof(data[i]) ==='string'){
            data[i] = `${data[i]} - done`;
        }
    }

console.log(data);



//    3 Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
//     Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];





// Место для первой задачи
// function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    // const arr = [3, 5, 8, 16, 20, 23, 50];
    // const result = [];

    // Пишем решение вот тут
    
    
    // Не трогаем
    // return result;
// }

// Место для второй задачи
// function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    // const data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут
    
    
    // Не трогаем
    // return data;
// }

// Место для третьей задачи
// function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    // const data = [5, 10, 'Shopping', 20, 'Homework'];
    // const result = [];

    // Пишем решение вот тут
    