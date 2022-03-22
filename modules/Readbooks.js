export const bookDiv = document.querySelector('.list_books > ul');

export const readBook = (books, bookDiv) => {
  bookDiv.innerHTML = '';
  bookDiv.style.borderColor = 'white';
  if (books) {
    books.forEach((book, index) => {
      bookDiv.style.borderColor = '#091a40';
      const li = document.createElement('li');
      li.innerHTML = `
            <span> <q>${book.title_name}</q> by ${book.author_name} </span>
            <span>
              <button class="btn" data-id="${index}">Remove</button>
            </span>
           `;
      bookDiv.appendChild(li);
    });
  }
};

export const removeBook = (btn, bookList, bookDiv) => {
  bookList = bookList.filter((book, index) => index !== Number(btn.dataset.id));
  localStorage.setItem('book_info', JSON.stringify(bookList));
  readBook(bookList, bookDiv);
};