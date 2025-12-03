'use strict';

const User = function (email, password) {
    // функция конструктор класса
    this.email = email;
    this.password = password + '%%%';
};

const user1 = new User('a@a.ru', '123');
console.log(user1);
const user2 = new User('a2@a.ru', '1234');
console.log(user2);
console.log(user2 instanceof User);

// Создаётся пустой объект
// Вызывается User функция
// this = пустой объект
// объект связывается с prototype
// возвращается объект
