/* eslint-disable no-restricted-globals */
const myLibrary = [];

function Books(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  // this.info = () => `${title} by ${author}, ${pages} pages, ${read}`;
}

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
      <button class="cbutton1">Read?</button>
      <button class="cbutton2">Delete</button>
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

/* work flow:
5: displayLibrary() to automatically fill new html divs to showcase object contents of myLibrary();
*/
