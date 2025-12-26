'use strict';

/* Получить среднюю цену 30 товаров из API
    https://dummyjson.com/products
*/

function req() {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://dummyjson.com/products/');
    request.send();
    request.addEventListener('load', function () {
        const { products } = JSON.parse(this.responseText);
        const sum = products.reduce((acc, p) => acc += p.price, 0);
        const averagePrice = sum / products.length;
        console.log(averagePrice);
    });
}

req();
