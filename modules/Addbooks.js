import { readBook } from './Readbooks.js';

export const form = document.querySelector('.add-book-form');
export const bookList = JSON.parse(localStorage.getItem('book_info')) || [];

export const addBook = (e, bookList, form, bookDiv) => {
  e.preventDefault();
  bookList.push({
    title_name: form.elements.title.value,
    author_name: form.elements.author.value,
  });
  // update local storage
  localStorage.setItem('book_info', JSON.stringify(bookList));
  readBook(bookList, bookDiv);
  // clear form
  form.elements.title.value = '';
  form.elements.author.value = '';
};