'use strict';

/*
    Сделать генератор 3х идей от скуки
    https://bored.api.lewagon.com/api/activity
    с отображением на странице
*/

const wrapper = document.querySelector('.wrapper');

async function generateActivity() {
    const res = await fetch('https://bored.api.lewagon.com/api/activity');
    return res.json();
}


async function generate() {
    try {
        wrapper.innerHTML = '';
        const activities = await Promise.all([...Array(3)].map(() => generateActivity()))
        for (const el of activities) {
            const element = document.createElement('div')
            element.innerHTML = `${el.activity}`;
            wrapper.appendChild(element)
        }
    } catch (e) {
        console.error(e);
    }
}