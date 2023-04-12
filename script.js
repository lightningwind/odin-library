const myLibrary = [];

const newBookBtn = document.querySelector('#new-book-btn');
const newBookForm = document.querySelector('#new-book-form');
const newBookTitle = document.querySelector('input#title');
const newBookAuthor = document.querySelector('input#author');
const newBookPages = document.querySelector('input#pages');
const newBookRead = document.querySelector('input#read');
const table = document.querySelector('table');
const tableBody = document.querySelector('tbody');

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
  tableBody.innerHTML = '';
  myLibrary.forEach((book) => {
    const tableRow = document.createElement('tr');
    const titleCell = document.createElement('td');
    const authorCell = document.createElement('td');
    const pagesCell = document.createElement('td');
    const readCell = document.createElement('td');

    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    pagesCell.textContent = book.pages;
    readCell.textContent = book.read ? 'read' : 'not read yet';

    tableRow.appendChild(titleCell);
    tableRow.appendChild(authorCell);
    tableRow.appendChild(pagesCell);
    tableRow.appendChild(readCell);

    tableBody.appendChild(tableRow);
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
