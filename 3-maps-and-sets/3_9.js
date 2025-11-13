'use strict';

let a = { a: 1 };
const b = { b: 1 };
const set = new WeakSet([a, b]);
console.log(set);
a = null;
setTimeout(() => {
    console.log(set);
}, 1000);