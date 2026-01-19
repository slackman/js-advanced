'use strict';

function getData(url, errorMessage, method = 'GET') {
    return fetch(url, { method }).then((response) => {
        if (!response.ok) {
            throw new Error(`${errorMessage} ${response.status}`);
        }
        return response.json();
    });
}

getData('https://dummyjson.com/productss', 'Can not get products')
    .then(({ products }) => {
        console.log(products);
        return getData(
            'https://dummyjson.com/products/' + products[0].id,
            'Can not get product'
        );
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Is error ${response.status}`);
        }
        response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        const el = document.querySelector('.filter');
        el.innerHTML = error.message;
    });
