'use strict';
// Приватные методы и свойства
class Car {
    #vin = 6; // приватное свойство
    speed;

    constructor() {
        // this.#test2 = 5; // в этом случае будет ошибка, т.к приватное свойство 
                            // не создастся автоматически, его нужно декларировать.
        this.test3 = 5;
    }


    #changeVin() { // приватный метод
        console.log('changed');
    }

    test() {
        this.#changeVin();
    }

    static #field = 3;

    static {
        this.#field = 5;
    }
}

const car = new Car();
car.test();