// Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. Причем, их количество должно быть равно переданному аргументу.

function fib(n) {
    if (typeof (n) !== "number" || n <= 0 || !Number.isInteger(n)) {
        return "";
    }
    let rezalt = "";
    let first = 0;
    let second = 1;

    for (let i = 0; i <= n; i++) {
        if (i === n) {
            rezalt = rezalt + `${first}`;
        } else {
            rezalt = rezalt + `${first}`;
        }

        let therd = first + second;
        first = second;
        second = therd;

    }
    return rezalt;
}

console.log(fib(10));