'use strict';

// Наследование
// const Book = function(title, author) {
//     this.title = title;
//     this.author = author;
// }

// Book.prototype.buy = function() {
//     console.log('Buy');
// }

// const AudioBook = function(title, author, lenMin) {
//     Book.call(this, title, author);
//     this.lenMin = lenMin;
// }

// // создается путой объект, а затем устанавливается связь прототипов,
// // один прототип привязывается к другому
// // таким образом реализуется наследование
// AudioBook.prototype = Object.create(Book.prototype);
// AudioBook.prototype.constructor = AudioBook; // иначе будет конструктор от Book
// AudioBook.prototype.log = function() {
//     console.log(`${this.title} - ${this.lenMin}`)
// }
// ===============================================================================
// Наслдедование ES6
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    buy() {
        console.log('Buy');
    }
}

class AudioBook extends Book {
    constructor(title, author, lenMin) {
        super(title, author);
        this.lenMin = lenMin;
    }

    log() {
        console.log(`${this.title} - ${this.lenMin}`);
    }
}

const book = new AudioBook('Lord Of The Rings', 'Tolkien', 20 * 60);
book.log();
book.buy();
console.log(book);
console.log(AudioBook.prototype.constructor);
console.log(book instanceof AudioBook); // true
console.log(book instanceof Book); // true
