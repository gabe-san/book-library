/* eslint-disable no-restricted-globals */
const myLibrary = [];

function Books(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = read;
  // this.info = () => `${title} by ${author}, ${pages} pages, ${read}`;
}

// Render book info from myLibrary
function displayLibrary() {
  return myLibrary;
  // for loop myLibrary
  // if object exists myLibrary, change textContent of html card on page
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
3: use addBookToLibrary to store the newly created object in myLibrary[]
5: displayLibrary() to automatically fill new html divs to showcase object contents of myLibrary();
*/
