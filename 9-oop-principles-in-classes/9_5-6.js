'use strict';
/* 
    Сделать класс врага со здоровьем и методом получения урона
    Сделать класс меча, который имеет силу и метод нанесения урона.
    Сделать клас орка, который в 50% случаев получает урон.
*/

class Enemy {
    health;

    constructor(health) {
        this.health = health;
    }

    receiveDamage(damage) {
        this.health -= damage;
        console.log(this.health);
    }
}

class Sword {
    #damage;

    constructor(damage) {
        this.#damage = damage;
    }
    strike(enemy) {
        enemy.receiveDamage(this.#damage);
    }
}

class Orc extends Enemy {
    constructor(health) {
        super(health);
    }

    receiveDamage(damage) {
        if (Math.random() > 0.5) {
            this.health -= damage;
        }
        console.log(this.health);
    }
}

class Troll extends Enemy {
}


const enemy = new Orc(10);
const enemy2 = new Troll(20);
const sword = new Sword(3);
sword.strike(enemy);
sword.strike(enemy);
sword.strike(enemy);
sword.strike(enemy2);
sword.strike(enemy2);
sword.strike(enemy2);
