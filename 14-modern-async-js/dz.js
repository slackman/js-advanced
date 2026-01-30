'use strict';

// Создать функцию race(), которая будет принимать массив Promise, и возвращать первый успешно выполненный или отклоненный.

async function getProduct(id) {
    // async нужен, потому что внутри await
    const response = await fetch('https://dummyjson.com/products/' + id);
    return response.json(); // тоже Promise
}

function race(promises) {
    // async НЕ нужен: мы и так возвращаем Promise
    return new Promise((resolve, reject) => {
        for (const p of promises) {
            Promise.resolve(p).then(resolve, reject);
        }
    });
}

(async () => {
    // тут async нужен, чтобы использовать await
    const result = await race([
        getProduct(1),
        getProduct(2),
        getProduct(3),
    ]);
    console.log(result);
})();