'use strict';

// function wait(ms) {
//     // return new Promise((resolve, reject) => {
//     //     setTimeout(() => {
//     //         resolve();
//     //     }, ms);
//     // });

//     // Promise withResolvers
//     const { resolve, reject, promise } = Promise.withResolvers();
//     setTimeout(() => {}, ms);
//     return promise;
// }

// async function run() {
//     console.log('Начало');
//     await wait(2000);
//     console.log('Конец');
// }

// run();

class Queue {
    #message = [];
    #resolve;
    #reject;
    #promise;

    constructor() {
        const { resolve, reject, promise } = Promise.withResolvers();
        this.#promise = promise;
        this.#reject = reject;
        this.#resolve = resolve;
    }

    add(msg) {
        this.#message.push(msg);
        return this;
    }

    close() {
        this.#resolve(this.#message);
    }

    error(reason) {
        this.#reject(reason);
    }

    subscribe() {
        return this.#promise;
    }
}

const queue = new Queue();
const sub1 = queue.subscribe();
sub1.then((data) => console.log(data)).catch((error) => console.error(error));
const sub2 = queue.subscribe();
sub2.then((data) => console.log(data)).catch((error) => console.error(error));

// queue.add('msg1').add('msg2').close();
queue.add('msg1').add('msg2').error('Не получен последний пакет');

// Основная суть Promise withResolvers ==========================================
// Идея Promise.withResolvers() — быстро получить пару функций resolve/reject и сам промис отдельно, чтобы завершить промис 

const prom = new Promise((resolve, reject) => {
  // где‑то тут нужно вызвать resolve/reject
});

// withResolvers делает это короче и удобнее:
const { promise, resolve, reject } = Promise.withResolvers();
// ...позже
resolve(value); // или reject(err)