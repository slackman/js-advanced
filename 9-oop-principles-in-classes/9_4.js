'use strict';

// override
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    info() {
        console.log(`${this.title} - ${this.author}`);
    }
}   

const book1 = new Book('Lord Of The Rings', 'Tolkien');
book1.info();

class Ebook extends Book {
    constructor(title, author, pages) {
        super(title, author);
        this.pages = pages;
    }

    // метод из Book перезаписан в классе Ebook
    // но нужно, чтобы перезаписываемый метод воспроизводил поведение исходного
    info() {
        console.log(`${this.title} - ${this.author} - ${this.pages}`);
    }
}

const book2 = new Ebook('Lord Of The Rings', 'Tolkien', 100);
book2.info();
