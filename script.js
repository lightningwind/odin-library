const myLibrary = [];

const newBookBtn = document.querySelector('#new-book-btn');
const newBookForm = document.querySelector('#new-book-form');
const newBookTitle = document.querySelector('input#title');
const newBookAuthor = document.querySelector('input#author');
const newBookPages = document.querySelector('input#pages');
const newBookRead = document.querySelector('input#read');
const table = document.querySelector('table');
const tableBody = document.querySelector('tbody');

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  logInfo() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      this.read ? "read" : "not read yet"
    }`;
  };

  /* (6) Add toggle functionality */
  toggleReadStatus() {
    this.read = !this.read; 
  }
}

/* (3) Loops through the array and displays each book in a table. */
function render() {
  tableBody.innerHTML = '';
  myLibrary.forEach((book, i) => {
    const tableRow = document.createElement('tr');
    const removeCell = document.createElement('td');
    const titleCell = document.createElement('td');
    const authorCell = document.createElement('td');
    const pagesCell = document.createElement('td');
    const readCell = document.createElement('td');
    const toggleCell = document.createElement('td');

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('onclick', `removeBookFromLibrary(${i})`);
    deleteBtn.classList.add('remove-book-btn');

    const toggleBtn = document.createElement('button');
    toggleBtn.setAttribute('onclick', `toggleReadStatus(${i})`);
    toggleBtn.classList.add('toggle-book-status-btn');

    deleteBtn.textContent = 'X';
    toggleBtn.textContent = 'T';

    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    pagesCell.textContent = book.pages;
    readCell.textContent = book.read ? 'read' : 'not read yet';

    removeCell.appendChild(deleteBtn);
    toggleCell.appendChild(toggleBtn);

    tableRow.appendChild(removeCell);
    tableRow.appendChild(titleCell);
    tableRow.appendChild(authorCell);
    tableRow.appendChild(pagesCell);
    tableRow.appendChild(readCell);
    tableRow.appendChild(toggleCell);

    tableBody.appendChild(tableRow);
  })
}

function addBookToLibrary() {
  const newBook = new Book(newBookTitle.value, newBookAuthor.value, newBookPages.value, newBookRead.checked);
  myLibrary.push(newBook);
  render();
}

/* Removes book <myLibrary[index]> and re-renders the table */
function removeBookFromLibrary(index) {
  myLibrary.splice(index, 1);
  render();
}

function toggleReadStatus(index) {
  myLibrary[index].toggleReadStatus(); 
  render();
}

function resetForm() {
  newBookTitle.value = ''; 
  newBookAuthor.value = '';
  newBookPages.value = ''; 
  newBookRead.checked = false;  
}

newBookBtn.addEventListener('click', () => {
  newBookForm.style.display = 'block';
})

newBookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addBookToLibrary(); 
  table.style.display = 'table';
  resetForm();  
})

newBookTitle.addEventListener("input", (event) => {
  if (newBookTitle.validity.valueMissing) {
    newBookTitle.setCustomValidity("Your book needs to have a title!");
  } else {
    newBookTitle.setCustomValidity("");
  }
});

newBookAuthor.addEventListener("input", (e) => {
  if (newBookAuthor.validity.valueMissing) {
    newBookAuthor.setCustomValidity("Your book needs to have an author!");
  } else {
    newBookAuthor.setCustomValidity("");
  }
});

newBookPages.addEventListener("input", (e) => {
  if (newBookPages.validity.rangeUnderflow) {
    newBookPages.setCustomValidity("Your book needs to have at least one page!");
  } else {
    newBookPages.setCustomValidity("");
  }
});

const book1 = new Book('Batman Unburied', 'David S. Goyer', 10, true);
const book2 = new Book('Cracking the Tech Career', 'Gayle Laakmann McDowell', 334, false);
const book3 = new Book('To Kill a Mockingbird', 'Harper Lee', 281, true);

myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);
