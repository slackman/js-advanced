'use strict';

const button = document.querySelector('.button');

const eventHandler = function (event) {
    console.log('Event 1');
};

button.addEventListener('mouseover', eventHandler);

button.addEventListener('click', (event) => {
    console.log('Event 2');
    // после того как обработчик будет ненужен его нужно удалить,
    // чтобы не было утечки памяти
    button.removeEventListener('click', eventHandler);
});
