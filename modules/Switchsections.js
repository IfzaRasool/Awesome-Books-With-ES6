const navItem = document.querySelector('.nav_items');
export const container = document.querySelector('.container');

const check = (list, e) => {
  Array.from(list).forEach((list) => {
    if (list.firstElementChild.id !== e.target.id) {
      list.firstElementChild.classList.remove('active');
    } else {
      e.target.classList.add('active');
    }
  });
};

const switchSection = () => {
  navItem.addEventListener('click', (e) => {
    const divs = Array.from(container.children);
    divs.forEach((div) => {
      if (e.target.id === div.className) {
        const list = e.target.parentElement.parentElement.children;
        check(list, e);
        div.classList.add('active');
      } else {
        div.classList.remove('active');
      }
    });
  });
};

export default switchSection;