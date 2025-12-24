'use strict';

// class Weapon {
//     strike() {}

//     shoot() {}
// }

// class Rifle extends Weapon {
//     strike() {
//         // Неэффективно
//     }
//     shoot() {
//         // !
//     }
// }

// class Sword extends Weapon {
//     strike() {
//         // Неэффективно
//     }
//     // ненужный метод
//     shoot() {
//         // !
//     }
// }

class Weapon {
    cost;

    dealDamage() {}
}

class Rifle extends Weapon {
    shoot() {
        this.dealDamage();
    }
}

class Sword extends Weapon {
    strike() {
        this.dealDamage();
    }
}
