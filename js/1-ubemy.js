// /* Задание на урок:

// 1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
// 'Сколько фильмов вы уже посмотрели?'

// 2) Создать объект personalMovieDB и в него поместить такие свойства:
//     - count - сюда передается ответ на первый вопрос
//     - movies - в это свойство поместить пустой объект
//     - actors - тоже поместить пустой объект
//     - genres - сюда поместить пустой массив
//     - privat - в это свойство поместить boolean(логическое) значение false

// 3) Задайте пользователю по два раза вопросы:
//     - 'Один из последних просмотренных фильмов?'
//     - 'На сколько оцените его?'
// Ответы стоит поместить в отдельные переменные
// Записать ответы в объект movies в формате:
//     movies: {
//         'logan': '8.1'
//     }

// Проверить, чтобы все работало без ошибок в консоли */
// const numberOfFilms = +prompt("Сколько фильмов вы уже смотрели?", "");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };
// const a = prompt("Один из последних просмотренных фильмов?", ""),
//     b = prompt("На сколько оцените его?", ""),
//     c = prompt("Один из последних просмотренных фильмов?", ""),
//     d = prompt("На сколько оцените его?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// if (num == 55) {
//     console.log("ok");
// } else if (num < 55) {
//     console.log("eror");
// } else {
//     console.log("erorr");
// }
// // Тернарний оператор
// const num = 55;
// num == 50 ? console.log("ok") : console.log("eror");

// const cars = 70;

// switch (cars) {
//     case 60:
//         console.log("eror");
//         break;
//     case 70:
//         console.log("ok");
//         break;
//     default:
//         console.log("eror - eror");
//         break;
// }

// console.log(NaN || 2 || undefined);//2

// console.log(NaN && 2 && undefined);//NaN

// console.log(1 && 2 && 3);//3

// console.log((!1 && 2) || !3);//false

// console.log(25 || (null && !3));//25

// console.log(NaN || null || !3 || undefined || 5);//5

// console.log(NaN || (null && !3 && undefined) || 5);//5

// console.log((5 === 5 && 3 > 1) || 5);//true

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if ((hamburger === 3 && cola) || (fries === 3 && nuggets)) {
//     console.log("Done!");
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger || cola || fries === 3 || nuggets) {
//     console.log("Done!");
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if ((hamburger && cola) || (fries === 3 && nuggets)) {
//     console.log("Done!");
// } else {
//     console.log("Eror");
// }
