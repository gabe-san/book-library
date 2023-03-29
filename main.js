// Store Book objects within array
const myLibrary = [];

// Write a constructor for making "Book" objects
function Books(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    console.log(`${title} by ${author}, ${pages} pages, ${read}`);
  };
}
const theHobbit = new Books('The Hobbit', 'J.R.R Tolkien', '295', 'not read yet');
console.log(theHobbit.info());

// function to add Books to myLibrary
function addBookToLibrary() {
  
}
