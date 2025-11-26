'use strict';
/*
    Написать функцию, которая принимает min и max
    и возвращает случайное число между ними, включая их
*/

function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

console.log(randomBetween(1, 20));