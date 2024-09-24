/* eslint-disable func-names */
/* eslint-disable no-restricted-globals */
const myLibrary = [];

class BookClass {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  toggleRead = () => {
    this.read = !this.read
  }
}

// Render book info from myLibrary
function displayLibrary() {
  const libraryRender = document.querySelector('#content-container');
  libraryRender.textContent = '';
  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    const bookOne = document.createElement('div');
    bookOne.innerHTML = `
    <div>
      <h3> ${book.title}</h3>
      <h5> ${book.author}</h5>
      <p>${book.pages} pages</p>
      <p>${book.read ? 'Read' : 'Not Yet Read'}</p>
    </div>
    <div class="cbuttons">
      <button class="formb" onclick="toggleRead(${i})">Toggle Read</button>
      <button class="formb" onclick="deleteBook(${i})">Delete</button>
    </div>
    `;
    libraryRender.appendChild(bookOne);
  }
}

// function to add Books to myLibrary
function addBookToLibrary() {
  const title = document.getElementById('book-title').value;
  const author = document.getElementById('author-name').value;
  const pages = document.getElementById('page-count').value;
  const read = document.getElementById('user-readstatus').checked;
  const newBook = new BookClass(title, author, pages, read);
  myLibrary.push(newBook);
  displayLibrary();
}

// eslint-disable-next-line no-unused-vars
function toggleRead(index) {
  myLibrary[index].toggleRead();
  displayLibrary();
}

// eslint-disable-next-line no-unused-vars
function deleteBook(index) {
  myLibrary.splice(index, 1);
  displayLibrary();
}


const bookTitleValidation = document.getElementById('book-title');
bookTitleValidation.addEventListener('input', () => {
  if (bookTitleValidation.validity.valueMissing) {
    bookTitleValidation.setCustomValidity('\'Please input your book\'s title.\'');
  } else {
    bookTitleValidation.setCustomValidity('');
  }
});

const authorValidation = document.getElementById('author-name');
authorValidation.addEventListener('input', () => {
  if (authorValidation.validity.valueMissing) {
    authorValidation.setCustomValidity('\'Please input your book\'s author.\'');
  } if (authorValidation.validity.patternMismatch) {
    authorValidation.setCustomValidity('No numbers allowed');
  } else {
    authorValidation.setCustomValidity('');
  }
});

const pageCountValidation = document.getElementById('page-count');
pageCountValidation.addEventListener('input', () => {
  if (pageCountValidation.validity.valueMissing) {
    pageCountValidation.setCustomValidity('\'Please input your book\'s pages.\'');
  } else {
    pageCountValidation.setCustomValidity('');
  }
});


// show form
const addBookBtn = document.querySelector('#addBook');
addBookBtn.addEventListener('click', () => {
  const newBookForm = document.querySelector('#newBookForm');
  newBookForm.style.display = 'block';
});

// submit form
const submitBookBtn = document.querySelector('#newBookForm');
submitBookBtn.addEventListener('submit', () => {
  event.preventDefault();
  addBookToLibrary();
});

