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


// const isChecked = true,
//       isClose = true;

// console.log(isChecked && isClose);


// ПРАКТИКА

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

