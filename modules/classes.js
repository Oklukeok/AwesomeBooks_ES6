/* eslint max-classes-per-file: ["error", 3] */

export class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

export class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(title) {
    const books = Store.getBooks();

    books.forEach((book, index) => {
      if (book.title === title) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}

export class userInterface {
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach((book) => userInterface.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list');

    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td><button class="remove">remove</button></td>
      `;

    list.appendChild(row);
  }

  static deleteBook(element) {
    if (element.classList.contains('remove')) {
      element.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('#titleInput').value = '';
    document.querySelector('#authorInput').value = '';
  }
}
