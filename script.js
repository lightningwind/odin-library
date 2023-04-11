const myLibrary = [];

const newBookBtn = document.querySelector('#new-book-btn');
const newBookForm = document.querySelector('#new-book-form');

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${
    this.read ? "read" : "not read yet"
  }`;
};

function addBookToLibrary() {
  // TODO
}

newBookBtn.addEventListener('click', () => {
    newBookForm.style.display = 'block';
})