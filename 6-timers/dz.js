'use strict';

function daysBeforeNY() {
    const interval = setInterval(() => {
        const newYear = new Date('01-01-2027').getTime();
        const diff = new Date(newYear - new Date());
        const afterFormat = `${diff.getMonth()} месяцев, ${diff.getDate()}, дней ${diff.getHours()} часов, ${diff.getMinutes()} минут, ${diff.getSeconds()} секунд`;
        document.getElementById('h1').innerText = afterFormat;
    }, 1000);

    setTimeout(() => {
        clearInterval(interval);
    }, newYear);
}

daysBeforeNY();
