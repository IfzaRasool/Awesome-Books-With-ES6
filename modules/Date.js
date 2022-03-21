import { DateTime } from '../node_modules/luxon/luxon.js';

const time = document.querySelector('.time');
export const displayDate = () => {
  const now = DateTime.now();
  time.innerText = now.toLocaleString({
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
};

export default displayDate();