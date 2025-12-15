'use strict';

class Person {
    constructor(race, name, language) {
        this.race = race;
        this.name = name;
        this.language = language;
    }

    say() {
        console.log(`${this.name}, ${this.language}`);
    }
}

class Orc extends Person {
    constructor(race, name, language, weapon) {
        super(race, name, language);
        this.weapon = weapon;
    }

    say() {
        console.log(`${this.name}, ${this.language}. I'm orc!`);
    }

    hit() {
        console.log(`Удар`);
    }
}

class Elf extends Person {
    constructor(race, name, language) {
        super(race, name, language);
    }

    createSpell(typeSpell) {
        this.typeSpell = typeSpell;
    }

    spell() {
        console.log(`Кастую заклинание ${this.typeSpell}`);
    }

    say() {
        console.log(`${this.name}, ${this.language}. I'm elf!`);
    }
}

const orc = new Orc('orc', 'Vasya', 'Russian', 'Дубина');
const elf = new Elf('elf', 'Toni', 'Spanish');

orc.say();
orc.hit();
elf.createSpell('Фаерболт');
elf.spell();
console.log(orc.weapon);
console.log(elf.typeSpell);
