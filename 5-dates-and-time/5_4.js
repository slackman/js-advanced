'use strict';
/*
    Сделать функцию, которая принимает пользователя и проверяет,
    есть ли у него сегодня день рождения или нет
*/

const user = {
    name: 'Vasia',
    birthday: '11/26/2025',
};

function isBirthday(userInfo) {
    let now = new Date();
    let birthdayDate = new Date(userInfo.birthday);
    if (birthdayDate.getMonth() !== now.getMonth()) {
        return false;
    }

    if (birthdayDate.getDate() !== now.getDate()) {
        return false;
    }

    return true;
}

console.log(isBirthday(user));
