const myLibrary = [];

const newBookBtn = document.querySelector('#new-book-btn');
const newBookForm = document.querySelector('#new-book-form');
const bookTitle = document.querySelector('input#title');
const bookAuthor = document.querySelector('input#author');
const bookPages = document.querySelector('input#pages');
const bookRead = document.querySelector('input#read');

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
  const newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.checked);
  myLibrary.push(newBook);
  console.log(newBook.info);
}

newBookBtn.addEventListener('click', () => {
    newBookForm.style.display = 'block';
})

newBookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addBookToLibrary(); 
})