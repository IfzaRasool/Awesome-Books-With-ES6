import { addBook, bookList, form } from './modules/Addbooks.js';
import { switchSection } from './modules/Switchsections.js';
import { readBook, bookDiv, removeBook } from './modules/Readbooks.js';
import { displayDate } from './modules/Date.js';

displayDate();

switchSection();
readBook(bookList, bookDiv);

// create a book
form.addEventListener('submit', (e) => addBook(e, bookList, form, bookDiv));

// delete book
bookDiv.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn')) {
    removeBook(e.target, bookList, bookDiv);
  }
});