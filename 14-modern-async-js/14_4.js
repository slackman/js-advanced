'use strict';

// асинхронные стрелочные функции
class ProductRepository {
    async getProducts() {
        const response = fetch('https://dummyjson.com/products');
        console.log(await response.json());
    }
}

const repo = new ProductRepository();
repo.getProducts();

const asyncArrow = async () => {
    const response = fetch('https://dummyjson.com/products');
    console.log(await response.json());
}

asyncArrow();