'use strict';

/*
    Динамически создать N элементов с текстом и поле
    для поиска. При вводе в поле, выделять элементы,
    которые содержат введённый текст
*/

// мое решение
// const wrapper = document.querySelector('.wrapper');
// const input = wrapper.querySelector('.input');

// const divNodes = wrapper.querySelectorAll('.items div');
// divNodes.forEach((el) => {
//     el.classList.add('item');
// });

// input.addEventListener('change', function (e) {
//     const text = e.target.value;
//     search(text);
// });

// function search(text) {
//     divNodes.forEach((el) => el.classList.remove('backlight'));
//     for (let i of divNodes) {
//         if (i.textContent.includes(text)) {
//             // добавить подстветку
//             i.classList.add('backlight');
//         }
//     }
// }

// решение автора
const wrapper = document.querySelector('.wrapper');
for (let i = 0; i < 100; i++) {
    const el = document.createElement('div');
    el.innerHTML = `${i}`;
    wrapper.appendChild(el);
}

function search(event) {
    const inputValue = event.target.value;
    for (const el of [...wrapper.children]) {
        if (el.innerHTML.includes(inputValue)) {
            el.classList.add('yellow');
            continue;
        }
        el.classList.remove('yellow');
    }
}
