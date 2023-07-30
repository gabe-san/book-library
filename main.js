/* eslint-disable func-names */
/* eslint-disable no-restricted-globals */
const myLibrary = [];

function Books(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
Books.prototype.toggleRead = function () {
  this.read = !this.read;
};

// Render book info from myLibrary
function displayLibrary() {
  const libraryRender = document.querySelector("#content-container");
  libraryRender.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    const bookOne = document.createElement("div");
    bookOne.innerHTML = `
    <div>
      <h3> ${book.title}</h3>
      <h5> ${book.author}</h5>
      <p>${book.pages} pages</p>
      <p>${book.read ? "Read" : "Not Yet Read"}</p>
    </div>
    <div class="cbuttons">
      <button class="cbutton1" onclick="toggleRead(${i})">Toggle Read</button>
      <button class="cbutton2" onclick="deleteBook(${i})">Delete</button>
    </div>
    `;
    libraryRender.appendChild(bookOne);
  }
}

// function to add Books to myLibrary
function addBookToLibrary() {
  const title = document.getElementById("book-title").value;
  const author = document.getElementById("author-name").value;
  const pages = document.getElementById("page-count").value;
  const read = document.getElementById("user-readstatus").checked;
  const newBook = new Books(title, author, pages, read);
  myLibrary.push(newBook);
  displayLibrary();
}

function toggleRead(index) {
  myLibrary[index].toggleRead();
  displayLibrary();
}

function deleteBook(index) {
  myLibrary.splice(index, 1);
  displayLibrary();
}

// show form
const addBookBtn = document.querySelector("#addBook");
addBookBtn.addEventListener("click", () => {
  const newBookForm = document.querySelector("#newBookForm");
  newBookForm.style.display = "block";
});
// submit form
const submitBookBtn = document.querySelector("#newBookForm");
submitBookBtn.addEventListener("submit", () => {
  event.preventDefault();
  addBookToLibrary();
});
