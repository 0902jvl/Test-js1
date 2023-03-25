const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovidDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из последних просмотренных фильмов?", "");
const b = prompt("На сколько его оцените?", "");
const c = prompt("Один из последних просмотренных фильмов?", "");
const d = prompt("На сколько его оцените?", "");

personalMovidDB.movies[a] = b;
personalMovidDB.movies[c] = d;

console.log(personalMovidDB);

// int++;
// prompt('do you');

// let x = 128;
// // x = 5 + 1;
// // x += 1;
// // x++
// console.log(x);

// confirm('Вам есть 18 лет?')

// let answers = [];
// answers[0] = prompt("Как ваше имя?", "");
// answers[1] = prompt("Какая ваша фамиля?", "");
// answers[2] = prompt("Сколько вам лет?", "");

// document.write(answers);