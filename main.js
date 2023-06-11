// Store Book objects within array
const myLibrary = [];

// Write a constructor for making "Book" objects
function Books(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => `${title} by ${author}, ${pages} pages, ${read}`;
}

// manually add one book to test
const theHobbit = new Books(
  "The Hobbit",
  "J.R.R Tolkien",
  "295",
  "not read yet"
);
console.log(theHobbit.info());
// for user input, you must getElement or querySelector each from the form in order to implement new Book.

// function to add Books to myLibrary
function addBookToLibrary(bookConstructor) {
  // .push() object from constructor to myLibrary. bookAdd returns length of new array(myLibrary)

  const bookAdd = myLibrary.push(bookConstructor);
  // newObjectFromBookConstructor.push(myLibrary);
  // console.log(myLibrary[bookAdd]);
}
addBookToLibrary(theHobbit);
function displayLibrary() {
  return myLibrary;
  // for loop myLibrary
  // if object exists myLibrary, change textContent of html card on page
}

// some useful methods for project: arr.find(function(item,index,array))
// https://javascript.info/array-methods
