let a = 3;
let b = 5;
if (2 <= a < 11 && 6 <= b < 14) {
    console.log("+");
} else {
    console.log("-");
}

// Сложение чисел Фибоначче

function numberFibonachhe(n) {
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}
console.log(numberFibonachhe(7));

// 1 Создайте программу, выводящую на экран первые 55 элементов последовательности 1 3 5 7 9 11 13 15 17

function outputOfNumbers(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}
outputOfNumbers(55);

// 2 Создайте функцию, выводящую на экран все неотрицательные элементы последовательности 90 85 80 75 70 65 60

function outputNonNegativOfNumbers() {
    for (let i = 90; i >= 60; i -= 5) {
        console.log(i);
    }
}
outputNonNegativOfNumbers();

// 3 Создайте функцию, выводящую на экран первые 20 элементов последовательности 2 4 8 16 32 64 12

function outputOfConsecutiveNumbers(n) {
    let a = 2;
    for (let i = 1; i <= n; i++) {
        console.log(a);
        a = a * 2;
    }
}
console.log(outputOfConsecutiveNumbers(5));

// 4 Создайте функцию, выводящую на экран все числа кратные пяти, от -29 до 10.

function multipleOfFive(s, e) {
    let start = s;
    let end = e;
    for (let i = start; i <= end; i++) {
        if (i % 5 == 0) {
            console.log(i);
        }
    }
}
multipleOfFive(-29, 10);

// 5 найти сумму всех чисел от 50 до 150, вывести и количество четных чисел в этом диапазоне.

function sumNumbers(start, end) {
    let sum = 0;
    let count = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
        if (i % 2 == 0) {
            count++;
        }
    }
    return { sum: sum, count: count };
}
console.log(sumNumbers(50, 150));

// 1 . Для введённого пользователем с клавиатуры натурального числа посчитайте сумму всех его цифр (заранее не известно сколько цифр будет в числе).


function sum() {
    let num = 2;
    let sum = 0;
    let count = 0;
    for (let i = 0; i <= num; i++) {
        sum += i;
        if (i % 2 == 0) {
            count++;
        }
    }
    return { sum: sum, count: count };
}
console.log(sum());