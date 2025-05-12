import { format, addDays, subDays } from 'date-fns';

const createNavBar = () => {
  const nav = document.createElement('nav');
  nav.style.display = 'flex';
  nav.style.justifyContent = 'space-between';
  nav.style.alignItems = 'center';
  nav.style.padding = '10px';
  nav.style.backgroundColor = '#DC8BE0';
  nav.style.borderBottom = '1px solid #ccc';

  // Title
  const title = document.createElement('h1');
  title.textContent = 'To-Do List';
  title.style.margin = '0';
  nav.appendChild(title);

  // Calendar Controls
  const calendarContainer = document.createElement('div');
  calendarContainer.style.display = 'flex';
  calendarContainer.style.alignItems = 'center';

  const prevButton = document.createElement('button');
  prevButton.textContent = '<';
  prevButton.style.marginRight = '10px';

  const nextButton = document.createElement('button');
  nextButton.textContent = '>';
  nextButton.style.marginLeft = '10px';

  const dateDisplay = document.createElement('span');
  let currentDate = new Date();
  dateDisplay.textContent = format(currentDate, 'MMMM dd, yyyy');

  prevButton.addEventListener('click', () => {
    currentDate = subDays(currentDate, 1);
    dateDisplay.textContent = format(currentDate, 'MMMM dd, yyyy');
  });

  nextButton.addEventListener('click', () => {
    currentDate = addDays(currentDate, 1);
    dateDisplay.textContent = format(currentDate, 'MMMM dd, yyyy');
  });

  calendarContainer.appendChild(prevButton);
  calendarContainer.appendChild(dateDisplay);
  calendarContainer.appendChild(nextButton);

  nav.appendChild(calendarContainer);

  document.body.prepend(nav);
};


export default createNavBar;