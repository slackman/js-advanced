'use strict';

const MS = {
    second: 1000,
    minute: 60 * 1000,
    hour: 60 * 60 * 1000,
    day: 24 * 60 * 60 * 1000,
};

function getTimeParts(diffMs, months) {
    const days = Math.floor(diffMs / MS.day);
    diffMs %= MS.day;

    const hours = Math.floor(diffMs / MS.hour);
    diffMs %= MS.hour;

    const minutes = Math.floor(diffMs / MS.minute);
    diffMs %= MS.minute;

    const seconds = Math.floor(diffMs / MS.second);

    return { months, days, hours, minutes, seconds };
}

function calcMonths(now, target) {
    let months =
        (target.getFullYear() - now.getFullYear()) * 12 +
        (target.getMonth() - now.getMonth());

    const candidate = new Date(
        now.getFullYear(),
        now.getMonth() + months,
        now.getDate()
    );

    if (candidate > target) {
        months--;
    }

    return months;
}

function daysBeforeNY() {
    const interval = setInterval(() => {
        const now = new Date();
        const target = new Date(now.getFullYear() + 1, 0, 1);
        const months = calcMonths(now, target);
        const afterMonths = new Date(now);
        afterMonths.setMonth(afterMonths.getMonth() + months);

        const diffMs = target - afterMonths;
        const parts = getTimeParts(diffMs, months);
        document.getElementById(
            'h1'
        ).innerText = `${parts.months} месяцев, ${parts.days}, дней ${parts.hours} часов, ${parts.minutes} минут, ${parts.seconds} секунд`;
        if (target - now <= 0) clearInterval(interval);
    }, 1000);
}

daysBeforeNY();
