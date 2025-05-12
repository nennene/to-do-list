const createTasksPage = () => {
  const main = document.createElement('main');
  main.classList.add('main-content');
 

  // Section: Today's Tasks
  const todaysTasksSection = document.createElement('section');
  const todaysTasksTitle = document.createElement('h2');
    todaysTasksTitle.classList.add('todays-tasks-title');

  todaysTasksTitle.textContent = "Today's Tasks";
  todaysTasksSection.appendChild(todaysTasksTitle);
  const todaysTasksList = document.createElement('ul');
  todaysTasksList.classList.add('tasks-list');

  

  // Example tasks
  ['Task 1', 'Task 2', 'Task 3'].forEach((task) => {
    const taskItem = document.createElement('li');
    taskItem.textContent = task;
    taskItem.classList.add('task-item');
    
    todaysTasksList.appendChild(taskItem);
  });

  todaysTasksSection.appendChild(todaysTasksList);
  main.appendChild(todaysTasksSection);

  // Section: Notes
  const notesSection = document.createElement('section');
  const notesTitle = document.createElement('h2');
  notesTitle.textContent = 'Notes';
  notesSection.appendChild(notesTitle);
notesSection.classList.add('notes-section');
  const notesList = document.createElement('ul');
 

  // Example notes
  ['Note 1', 'Note 2', 'Note 3'].forEach((note) => {
    const noteItem = document.createElement('li');
    noteItem.textContent = note;
    noteItem.classList.add('note-item');
    notesList.appendChild(noteItem);
  });

  notesSection.appendChild(notesList);
  main.appendChild(notesSection);

  // Section: Ongoing Projects
  const projectsSection = document.createElement('section');
  const projectsTitle = document.createElement('h2');
  projectsTitle.textContent = 'Ongoing Projects';
  projectsSection.appendChild(projectsTitle);

  const projectsList = document.createElement('ul');
 

  // Example projects
  ['Project 1', 'Project 2', 'Project 3'].forEach((project) => {
    const projectItem = document.createElement('li');
    projectItem.textContent = project;
    projectItem.classList.add('project-item');
    projectsList.appendChild(projectItem);
  });

  projectsSection.appendChild(projectsList);
  main.appendChild(projectsSection);

  document.body.appendChild(main);

  
 // button to add task
const addTaskButton = document.createElement('button');
addTaskButton.textContent = '+';
addTaskButton.classList.add('add-task-button');
addTaskButton.addEventListener('click', () => {
  // Open a new window
  const taskWindow = window.open('', '_blank', 'width=400,height=400');

  // Create a form in the new window
  const form = taskWindow.document.createElement('form');
  form.style.display = 'flex';
  form.style.flexDirection = 'column';
  form.style.gap = '10px';
  form.style.marginTop = '20px';
  form.style.padding = '10px';
  form.style.border = '1px solid #ccc';
  form.style.borderRadius = '5px';
  form.style.backgroundColor = '#64E2B7';

  // Title field
  const titleLabel = taskWindow.document.createElement('label');
  titleLabel.textContent = 'Title:';
  const titleInput = taskWindow.document.createElement('input');
  titleInput.type = 'text';
  titleInput.required = true;

  // Date field
  const dateLabel = taskWindow.document.createElement('label');
  dateLabel.textContent = 'Date:';
  const dateInput = taskWindow.document.createElement('input');
  dateInput.type = 'date';
  dateInput.required = true;

  // Notes field
  const notesLabel = taskWindow.document.createElement('label');
  notesLabel.textContent = 'Notes:';
  const notesInput = taskWindow.document.createElement('textarea');
  notesInput.rows = 3;

  // Submit button
  const submitButton = taskWindow.document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Add Task';
  submitButton.style.marginTop = '10px';

  // Append fields to the form
  form.appendChild(titleLabel);
  form.appendChild(titleInput);
  form.appendChild(dateLabel);
  form.appendChild(dateInput);
  form.appendChild(notesLabel);
  form.appendChild(notesInput);
  form.appendChild(submitButton);

  // Add form to the new window
  taskWindow.document.body.appendChild(form);

  // Handle form submission
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Create a new task item
    const taskItem = document.createElement('li');
    taskItem.textContent = `${titleInput.value} - ${dateInput.value} - ${notesInput.value}`;
    taskItem.classList.add('task-item');

    // Add the task to the main page's task list
    const todaysTasksList = document.querySelector('.tasks-list');
    if (todaysTasksList) {
      todaysTasksList.appendChild(taskItem);
    }

    // Close the popup window
    taskWindow.close();
  });
});

todaysTasksSection.appendChild(addTaskButton);

    // button to cleat tasks
    const clearTasksButton = document.createElement('button');
    clearTasksButton.textContent = '-';
    clearTasksButton.classList.add('clear-tasks-button');

    clearTasksButton.addEventListener('click', () => {
      const taskItems = todaysTasksList.querySelectorAll('.task-item');
      taskItems.forEach((taskItem) => {
        taskItem.remove();
      });
    });
    todaysTasksSection.appendChild(clearTasksButton);
};



export default createTasksPage;