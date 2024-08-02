const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');
let tasks = [];

function showAlert() {
    alert('Pole zadania nie może być puste.');
}

function addTask() {
    const taskName = taskInput.value.trim();
    if (taskName === '') {
        showAlert();
    } else {
        const task = {
        name: taskName,
        };
        tasks.push(task);
        inputTasks();
        taskInput.value = '';
    }
}

addTaskButton.addEventListener('click', addTask);

taskInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    addTask();
  }
});

function inputTasks() {
    taskList.innerHTML = '';
    const addTasks = tasks;

    addTasks.forEach(task => {
        const li = document.createElement('li');
        const taskName = document.createElement('span');
        taskName.setAttribute('id', 'task-name')
        taskName.textContent = task.name;
  
    const editButton = document.createElement('button');
        editButton.textContent = 'Edytuj';
        editButton.addEventListener('click', () => {
            const editInput = document.createElement('input');
            editInput.type = 'text';
            editInput.value = task.name;

            editInput.addEventListener('keydown', function(event) {
                if (event.key === 'Enter') {
                    const newName = editInput.value.trim();
                    if (newName === '') {
                        showAlert();
                    } else {
                        task.name = newName;
                        inputTasks();
                    }
                }
              });
    
        const saveButton = document.createElement('button');
            saveButton.textContent = 'Zatwierdż zmiany';
            saveButton.addEventListener('click', () => {
                const newName = editInput.value.trim();
                if (newName === '') {
                    showAlert();
                } else {
                    task.name = newName;
                    inputTasks();
                }
            });
    
        const cancelButton = document.createElement('button');
            cancelButton.textContent = 'Cofnij';
            cancelButton.addEventListener('click', () => {
                inputTasks();
            });
            
        li.innerHTML = '';
        li.appendChild(editInput);
        li.appendChild(saveButton);
        li.appendChild(cancelButton);
        });
  
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Usuń';
        removeButton.addEventListener('click', () => {
          for (let i = 0; i < tasks.length; i++) {
            if (tasks[i] === task) {
              tasks.splice(i, 1);
              break;
            }
          }
          inputTasks();
        });
        
        const taskNameElement = li.querySelector('#task-name');
        if (taskNameElement) {
        li.removeChild(taskNameElement);
}
        li.innerHTML = '';
        li.appendChild(taskName);
        li.appendChild(editButton);
        li.appendChild(removeButton);
        taskList.appendChild(li);  
    });
}

inputTasks();