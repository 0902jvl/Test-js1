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

// 21 Logical operators
console.log(personalMovidDB);
let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger && cola || fries === 3 && nuggets) {
    console.log("Done!");
}


// 22 a cycle
while (num < 10) {
    console.log(num);
    num += 2;
}

let num = 1;
do {
    console.log(num);
    num += 3;
}
while (num < 10);

for (let i = 1; i < 10; i += 2) {
    if (i > 6) {
        break;
    }
    console.log(i);
}

// 23 cycle within a cycle
let resalt = "";
const len = 7;

for (let i = 0; i < len; i++) {

    for (let j = 0; j < i; j++) {
        resalt += "*";
    }
    resalt += "\n";
}
console.log(resalt);

first: for (let i = 0; i < 3; i++) {
    console.log(`firsd level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`       second level: ${j}`);
        for (let k = 0; k < 7; k++) {
            if (k === 6) continue first;
            console.log(`                therd level: ${k}`);
        }
    }
}


// Упражнение по написанию кода 3: Задания на использование

//                                     Место для первой задачи
for (let i = 5; i < 11; i++) {
    console.log(i);
}
//                                      Место для второй задачи
for (let i = 20; i > 9; i--) {
    if (i === 13) break;
    console.log(i);
}
//                                      Место для третьей задачи
for (let i = 2; i < 11; i += 2) {
    console.log(i);
}
//                                      Место для четвертой задачи
let i = 2;
while (i <= 16) {
    if (i % 2 === 0) {
        i++;
        continue;
    } else {
        console.log(i);
    }
    i++;
}
//                                      Место для пятой задачи
const arrayOfNumbers = [];
// Пишем решение вот тут
for (let i = 5; i < 11; i++) {
    arrayOfNumbers[i - 5] = 1;
}
console.log(arrayOfNumbers);


//1
const arr = [3, 5, 8, 16, 20, 23, 55];
const result = [];
for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i];
}
console.log(result);

//2
const data = [5, 10, "Shopping", 20, "Homework"];
for (let i = 0; i < data.length; i++) {
    if (typeof (data[i]) === "number") {
        data[i] = data[i] * 2;
    } else if (typeof (data[i]) === "string") {
        data[i] = `${data[i]}- data`;
    }
}
console.log(data);

//3
const dat = [5, 10, "Shopping", 20, "Homework"];
const res = [];
for (let i = 1; i <= dat.length; i++) {
    res[i - 1] = dat[dat.length - i];
}
console.log(res);



//elka
elkaTask();

function elkaTask() {
    const lines = 5;
    let result = "";

    for (let i = 0; i <= lines; i++) {
        for (let j = 0; j < lines - i; j++) {
            result += " ";
        }
        for (let j = 0; j < 2 * i + 1; j++) {
            result += "*";
        }
        result += "\n";
    }
    console.log(result);
}

