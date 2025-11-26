'use sctict';

console.log(10 === 10.0);
// 0 1
console.log(0.1 + 0.2 === 0.3);
console.log(0.1 + 0.2);

console.log(Number('10'));
console.log(+'20'); // лучше не использовать. Явное лучше неявного
console.log(Number.parseInt('10', 10)); // второй параметр - система счисления
console.log(Number.parseInt('10 sec', 10)); // если в строке первое число, то его можно так вытащить
console.log(Number.parseInt('sec 10', 10)); // NaN
console.log('--------------------------------')
console.log(Number.parseFloat('11.5', 10));
console.log(Number.parseFloat('11.5 sec', 10));
console.log(Number.parseFloat('sec 11.5', 10)); // NaN


// проверка число или не число
console.log(Number.isNaN(Number('10sdfs')));
console.log(Number.isNaN(10 / 0));
console.log(Number.isFinite(10 / 0)); // Infinity
console.log(Number.isFinite(10)); // проверка на обычное число - более корректная

console.log(Number.isInteger(10));
console.log(Number.isInteger(10.4)); // отловить вещественное число