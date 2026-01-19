'use strict';

/* 
    Сделать запрос на https://dummyjson.com/products/categories,
    получить список категорий и отобразить <select> выбора категорий.
*/

function createSelect(array) {
    const el = document.querySelector('.filter');
    const options = array
        .map((item) => {
            const value = typeof item === 'string' ? item : item.name;
            return `<option value="${value}">${value}</option>`;
        })
        .join('');
    el.innerHTML = `<select>${options}</select>`;
}

function getCategories() {
    fetch('https://dummyjson.com/products/categories')
        .then((response) => response.json())
        .then((data) => createSelect(data))
        .catch((error) => console.error(`Ошибка: ${error}`));
}

getCategories();
