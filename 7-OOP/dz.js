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

Orc.prototype.spell = function () {
    console.log(`Кастую заклинание`);
};

const orc = new Orc('orc', 'Vasya', 'Russian', 'Дубина');

orc.say();
orc.hit();
orc.spell();
console.log(orc.weapon);
