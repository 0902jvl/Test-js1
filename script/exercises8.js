// Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

function getTimeFromMinutes(t) {
    if (typeof (t) !== "number" || t < 0 || !Number.isInteger(t))
        return "Ошибка, проверьте данные";
    var clock = Math.floor(t / 60);
    var min = t % 60;
    var stringClock = "";
    switch (clock) {
        case 0:
            stringClock = "часов";
            break;
        case 1:
            stringClock = "час";
            break;
        case 2:
        case 3:
        case 4:
            stringClock = "часа";
            break;
        default:
            stringClock = "часов";
    }
    return `Это ${clock} ${stringClock} и ${min} минут`;
}
console.log(getTimeFromMinutes(20));