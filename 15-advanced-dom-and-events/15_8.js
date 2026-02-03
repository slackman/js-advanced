'use strict';

// Перемещение по DOM
const wrapper = document.querySelector('.wrapper'); // ищет вниз по дереву
console.log(wrapper);

const inner = wrapper.querySelector('.inner');
const button = inner.querySelector('.button');
console.log(inner);
console.log(inner.childNodes);
console.log([...inner.children]);

console.log(inner.parentElement);
console.log(inner.parentNode);

console.log(button.closest('.wrapper')); // возвращает ближайшего родителя (ищет вверх по дереву)
console.log(button.closest('.button')); // button First
console.log(button.closest('.test')); // null

// поиск на том же уровне (сбоку)
console.log(button.previousElementSibling)
console.log(button.previousSibling)
console.log(button.nextElementSibling)
console.log(button.nextSibling)

// получение 3й кнопки
console.log(button.parentElement.children)