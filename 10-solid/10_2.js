'use strict';

// Принцип единой ответственности
class Character {
    #inventory = [];
    #health = 10;

    pickItem(item) {
        this.#inventory.push(item);
    }

    receiveDamage(damage) {
        this.#health -= damage;
    }

    // Разделение ответственности. Логика не относящаяся к классу
    // должна быть вынесена в другой класс.
    // saveCharacter() {
    //     localStorage.setItem('char', this);
    // }

    // loadCharacter() {
    //     /// ...
    // }
}

class DB {
    save(item) {
        localStorage.setItem('char', item);
    }

    load() {
        /// ...
    }
}
