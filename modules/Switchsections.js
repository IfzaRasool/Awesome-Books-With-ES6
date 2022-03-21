/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
 const navItem = document.querySelector('.nav_items');
const container = document.querySelector('.container');

 export const switchSection = () => navItem.addEventListener('click', (e) => {
      const divs = Array.from(container.children);
      divs.forEach((div) => {
        if (e.target.id === div.className) {
          const list = e.target.parentElement.parentElement.children;
          Array.from(list).forEach((list) => {
            if (list.firstElementChild.id !== e.target.id) {
              list.firstElementChild.classList.remove('active');
            } else {
              e.target.classList.add('active');
            }
          });

          div.classList.add('active');
        } else {
          div.classList.remove('active');
        }
      });
    });
