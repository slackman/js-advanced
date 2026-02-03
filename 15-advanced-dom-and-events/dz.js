'use strict';

const wrapper = document.querySelector('.wrapper');
const counter = document.createElement('div');
counter.classList.add('counter');
counter.innerHTML = 0;
wrapper.before(counter);

for (let i = 0; i < 5; i++) {
    const el = document.createElement('div');
    el.innerHTML = `Нажми меня`;
    wrapper.appendChild(el);
}

wrapper.addEventListener('click', function (event) {
    [...wrapper.children].forEach((el) => {
        el.innerHTML = `Нажми меня`;
    });
    event.target.innerHTML = `Нажата`;
    counter.innerHTML++;
});
