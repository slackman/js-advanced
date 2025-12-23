'use strict';

class Billing {
    #amount;

    constructor(amount) {
        this.#amount = amount;
    }

    getAmount() {
        return this.#amount;
    }

    calculateTotal() {
        throw new Error('Override calculateTotal in a billing strategy');
    }
}

class FixBilling extends Billing {
    calculateTotal() {
        return this.getAmount();
    }
}

class HourBilling extends Billing {
    constructor(amount, hours) {
        super(amount);
        this.hours = hours;
    }
    calculateTotal() {
        return this.amount * this.hours;
    }
}

class ItemBilling extends Billing {
    constructor(amount, items) {
        super(amount);
        this.items = items;
    }

    calculateTotal() {
        return this.amount * this.items;
    }
}

const fix = new FixBilling(200);
const hour = new HourBilling(50, 20);
const item = new ItemBilling(15, 6);

console.log(fix.calculateTotal());
console.log(hour.calculateTotal());
console.log(item.calculateTotal());
