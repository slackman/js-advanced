'use strict';

async function getAllProducts() {
    const response = await fetch('https://dummyjson.com/products');
    return response.json();
}

async function getProduct(id) {
    const response = await fetch('https://dummyjson.com/products/' + id);
    return response.json();
}

async function getProductError(id) {
    const response = await fetch('https://dummyjsons.com/products/' + id);
    return response.json();
}

async function main() {
    const { products } = await getAllProducts();
    // массив промисов, которые мы хотим запустить параллельно
    // если один из промисов не выполнился, то падает всё
    // const res = await Promise.all([
    //     getProduct(1),
    //     getProduct(2),
    //     getProductError(3),
    // ]);
    const res = await Promise.all(products.map(product => getProduct(product.id)));
    console.log(res);




    // for (const product of products) {
    //     const res = await getProduct(product.id);
    //     console.log(res);
    // }
}

main();