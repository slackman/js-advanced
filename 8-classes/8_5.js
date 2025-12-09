'use strict';

/*
    Реализовать класс пользователя, со свойствами
    - логин
    - пароль
    Причём пароль при установке должен переворачиваться
    и в таком виде храниться.
    Пароль и логин после создания изменить нельзя.
    Также у класса добавить методы
    - Смена пароля (передаём старый и новый пароль)
    - Сверки пароля
*/

class User {
    #user;
    #pass;
    constructor(user, pass) {
        this.#user = user;
        this.#pass = this.#reversePass(pass);
        // console.log(this.#pass)
    }

    checkPassword(pass) {
        // console.log(pass);
        // console.log(this.#reversePass(this.#pass))
        return pass === this.#reversePass(this.#pass)
    }

    changePassword(oldPass, newPass) {
        // console.log(checkResult)
        if (this.checkPassword(oldPass)) {
            this.#pass = this.#reversePass(newPass);
            console.log('Пароль успешно изменен');
            // console.log(this.#pass)
        } else {
            console.log(
                'Пароли совпадают, необходимо ввести пароль, отличающийся от предыдущего'
            );
        }
    }

    #reversePass(pass) {
        return pass.split('').reverse().join('');
    }
}

const tom = new User('Tom', '123');
tom.changePassword('123', '123');