document.getElementById('add-button').addEventListener('click', addTask);
document.addEventListener('DOMContentLoaded', loadTasks);

function addTask() {
    const input = document.getElementById('todo-input');
    const taskText = input.value.trim();

    if (taskText !== '') {
        const listItem = createTaskElement(taskText);
        document.getElementById('todo-list').appendChild(listItem);
        saveTask(taskText);
        input.value = '';
        input.focus();
    }
}

function createTaskElement(taskText, completed = false) {
    const listItem = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = completed;
    checkbox.style.marginRight = '10px';

    checkbox.addEventListener('change', function () {
        listItem.classList.toggle('completed', checkbox.checked);
        toggleTaskCompletion(taskText);
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(document.createTextNode(taskText));
    if (completed) listItem.classList.add('completed');

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.style.marginLeft = '10px';
    deleteButton.style.backgroundColor = '#dc3545';
    deleteButton.style.color = 'white';
    deleteButton.style.border = 'none';
    deleteButton.style.borderRadius = '4px';
    deleteButton.style.cursor = 'pointer';

    deleteButton.addEventListener('click', function () {
        listItem.remove();
        deleteTask(taskText);
    });

    listItem.appendChild(deleteButton);
    return listItem;
}

function saveTask(taskText) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push({ text: taskText, completed: false });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function deleteTask(taskText) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task.text !== taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function toggleTaskCompletion(taskText) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.map(task => {
        if (task.text === taskText) task.completed = !task.completed;
        return task;
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        const listItem = createTaskElement(task.text, task.completed);
        document.getElementById('todo-list').appendChild(listItem);
    });
}
