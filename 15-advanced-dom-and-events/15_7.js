'use strict';

// делегирование событий
const wrapper = document.querySelector('.wrapper');
for (let i = 0; i < 100; i++) {
    const el = document.createElement('div');
    el.innerHTML = `Пользователь с id ${i}`;
    el.setAttribute('data-id', i);
    // проблема. В этом случае создается 100 обработчиков событий
    // el.addEventListener('click', () => {
    //     console.log(`Deleted user ${i}`);
    // })
    wrapper.append(el);
}

// событие нажатия на внутренний элемент делегировано верхнеуровневому элементу
// за счёт этого благодаря механизму всплытия можно обработать нажатие
// на внутренние элементы в рамках верхнеуровнего элемента
wrapper.addEventListener('click', (e) => {
    const i = e.target.getAttribute('data-id');
    console.log(`Deleted user ${i}`);
})