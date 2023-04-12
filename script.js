const myLibrary = [];

const newBookBtn = document.querySelector('#new-book-btn');
const newBookForm = document.querySelector('#new-book-form');
const newBookTitle = document.querySelector('input#title');
const newBookAuthor = document.querySelector('input#author');
const newBookPages = document.querySelector('input#pages');
const newBookRead = document.querySelector('input#read');
const table = document.querySelector('table');

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function logInfo() {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${
    this.read ? "read" : "not read yet"
  }`;
};

function render() {
  myLibrary.forEach((book) => {
    console.log(book.info());
  })
}

function addBookToLibrary() {
  const newBook = new Book(newBookTitle.value, newBookAuthor.value, newBookPages.value, newBookRead.checked);
  myLibrary.push(newBook);
  render();
}

newBookBtn.addEventListener('click', () => {
  newBookForm.style.display = 'block';
})

newBookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addBookToLibrary(); 
  table.style.display = 'table';
})

const book1 = new Book('Batman Unburied', 'David S. Goyer', 10, false);
const book2 = new Book('Cracking the Tech Career', 'Gayle Laakmann McDowell', 334, false);
const book3 = new Book('To Kill a Mockingbird', 'Harper Lee', 281, true);

myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);
