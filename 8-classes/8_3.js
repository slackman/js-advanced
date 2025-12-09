'use strict';

class Test {
    static a = 1;
    static hello() { // static методы исполняются сразу, ненужно создавать инстанс
        console.log('Hello');
    }

    static {
        let b = 4;
        this.a = 5;
    }
}

Test.hello();
console.log(Test.a);