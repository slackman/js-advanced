'use strict';

class Car {
    #brand;
    #model;
    #mileage;

    constructor(brand, model, mileage) {
        this.#brand = brand;
        this.#model = model;
        this.#mileage = mileage;
    }

    set mileage(value) {
        this.#mileage = value;
    }

    get mileage() {
        return this.#mileage;
    }

    info() {
        console.log(`${this.#brand} ${this.#model} ${this.#mileage}`);
    }
}

const car = new Car('bmw', 'x3', '1000');
car.mileage = 1500;
console.log(car.mileage);
car.info();
