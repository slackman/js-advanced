'use strict';
// round - округление до ближайшего целого
console.log(Math.round(1.4));
console.log(Math.round(1.6));
console.log(Math.round(1.4999999));
console.log('==================================')
// ceil - округление до верхнего значения, большего целого ('потолок')
console.log(Math.ceil(1.1));
console.log(Math.ceil(1));
console.log(Math.ceil(0.1));
console.log('==================================')
// floor - округление до пола, меньшего целого
console.log(Math.floor(0.1));
console.log(Math.floor(2.9));
console.log('==================================')
// trunc (truncate) - обрезает дробную часть, оставляя только целую
console.log(Math.trunc(2.9));
console.log(Math.trunc(2.1));
console.log(Math.trunc(1.11111));

console.log(1.4999999.toFixed(1)); // вернет строку, параметр - кол-во знаков после запятой
console.log(Number((1.4999999).toFixed(1)));