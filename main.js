// Store Book objects within array
const myLibrary = [];

// Write a constructor for making "Book" objects
function Books(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = false; // to do: make conditional Example: let this.isRead = (read = true) ? true : false
  this.info = () => `${title} by ${author}, ${pages} pages, ${read}`;
}
// search how to make booleans in object constructor

// manually add one book to test
const theHobbit = new Books(
  "The Hobbit",
  "J.R.R Tolkien",
  "295",
  "not read yet"
);

// for user input, you must getElement or querySelector each from the form in order to implement new Book.

// function to add Books to myLibrary
function addBookToLibrary(bookConstructor) {
  const bookAdd = myLibrary.push(bookConstructor);

  return bookAdd;
}
addBookToLibrary(theHobbit);

function displayLibrary() {
  return myLibrary;
  // for loop myLibrary
  // if object exists myLibrary, change textContent of html card on page
}

/* work flow:
1: store user input into variables. form or prompt?
2: find a way to connect those variables into the Book Constructor
3: use addBookToLibrary to store the newly created object in myLibrary[]
4: ***Test*** console.log to see if array properly stores it
5: displayLibrary() to automatically fill new html divs to showcase object contents of myLibrary();
6: Add QoL button inputs: Remove book, add new book, Read status
*/
