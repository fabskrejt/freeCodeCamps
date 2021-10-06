// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (bookList, bookName) {
    let bookListArr = [...bookList]
    bookListArr.push(bookName);
    return bookListArr;

    // Change code above this line
}

// Change code below this line
function remove (bookList, bookName) {
    let bookListArr = [...bookList];
    var book_index = bookListArr.indexOf(bookName);
    if (book_index >= 0) {

        bookListArr.splice(book_index, 1);
        return bookListArr;

        // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);