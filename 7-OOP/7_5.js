'use strict';

const Book = function (title, author) {
    this.author = author;
    this.title = title;
    this.isRead = false;
};

// прототип создаётся не для класса книги, а для будущих инстансов класса Book.
// то есть это прототип создаваемых объектов класса, а не прототип самого класса
Book.prototype.read = function () {
    this.isRead = true;
};

Book.prototype.cover = 'Paper';

const lordOftheRing = new Book('Lord of the ring', 'Tolkien');
lordOftheRing.read();
console.log(lordOftheRing);
console.log(lordOftheRing.cover);
console.log(lordOftheRing.hasOwnProperty('cover')); // false
console.log(lordOftheRing.hasOwnProperty('author')); // true

console.log(lordOftheRing.__proto__);
console.log(lordOftheRing.__proto__ === Book.prototype);
console.log(Book.prototype.isPrototypeOf(lordOftheRing)); // true. Прототип экземпляра книги
console.log(Book.prototype.isPrototypeOf(Book)); // false

Array.prototype.first = function() {

}
const a = [5];
console.log(a);