'use strict';

function addTask(taskText) {
  const task = document.createElement('div');
  task.className = 'task';
  task.innerHTML = `
    <div class="task__title">
      ${taskText}
    </div>
    <a href="#" class="task__remove">&times;</a>
  `;
  tasksList.append(task);
  
  const task__remove = task.querySelector('a');
  task__remove.addEventListener('click', () => {
    task.remove();
    delTaskFromLS(taskText);
  })
}

const tasksList = document.getElementById('tasks__list');

const taskInput = document.getElementById('task__input');
taskInput.addEventListener('keydown', (event) => {
  if (event.keyCode === 13 && taskInput.value) {
    addTaskToLS(taskInput.value);
    addTask(taskInput.value);
    taskInput.value = '';
  }
});

const taskAdd = document.getElementById('tasks__add');
taskAdd.addEventListener('click', (event) => {
  if (taskInput.value) {
    addTaskToLS(taskInput.value);
    addTask(taskInput.value);
    taskInput.value = '';
  }
});

let tasks = [];
function addTaskToLS(taskText) {
  tasks.push(taskText);
  localStorage.setItem('tasks', tasks);
}

function delTaskFromLS(taskText) {
  tasks.splice(tasks.indexOf(taskText), 1);
  localStorage.setItem('tasks', tasks);
}

function addTaskFromLS() {
  if (localStorage.getItem('tasks')) {
    tasks = localStorage.getItem('tasks').split(',');
    tasks.forEach(taskText => addTask(taskText));
  }
}

document.addEventListener('DOMContentLoaded', addTaskFromLS);