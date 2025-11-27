'use strict';
function validateBirthday(birthday) {
    const differ = new Date().getTime() - new Date(birthday).getTime();
    const msInYear = 1000 * 60 * 60 * 24 * 365.25;
    if (Math.floor(differ / msInYear) < 14) {
        return false;
    }

    return true;
}
console.log(validateBirthday('2022-01-01'));
