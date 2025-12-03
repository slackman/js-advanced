'use strict';

const Person = function (race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
};

function Orc(race, name, language, weapon) {
    Person.call(this, race, name, language);
    this.weapon = weapon;
}

Orc.prototype.say = function () {
    console.log(`${this.name}, ${this.language}`);
};

Orc.prototype.hit = function () {
    console.log(`Удар`);
};

function Elf(race, name, language) {
    Person.call(this, race, name, language);
}

Elf.prototype.createSpell = function (typeSpell) {
    this.typeSpell = typeSpell;
};

Elf.prototype.spell = function () {
    console.log(`Кастую заклинание ${this.typeSpell}`);
};

const orc = new Orc('orc', 'Vasya', 'Russian', 'Дубина');
const elf = new Elf('elf', 'Toni', 'Spanish');

orc.say();
orc.hit();
elf.createSpell('Фаерболт');
elf.spell();
console.log(orc.weapon);
console.log(elf.typeSpell);
