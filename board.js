let currentDraggedElement;
let AllTasksAsJSON;

function updateHTML() {
    includeHTML();
    clearHTML();
    loadAllTasks();
    showTodos();
    showInProgress();
    showTesting();
    showDone();
    removeHighlightDone();
    removeHighlightInProgress();
    removeHighlightTesting();
    removeHighlightToDo();

}

function clearHTML() {
    document.getElementById('todo-tasks').innerHTML = '';
    document.getElementById('inprogress-tasks').innerHTML = '';
    document.getElementById('testing-tasks').innerHTML = '';
    document.getElementById('done-tasks').innerHTML = '';
}

function loadAllTasks() {
    let AllTicketsAsString = localStorage.getItem('AllTickets');
    AllTasksAsJSON = JSON.parse(AllTicketsAsString);
}

function showTodos() {
    let todo = AllTasksAsJSON.filter(t => t['Taskbox'] == 'todo');
    let id = 0;

    for (let i = 0; i < todo.length; i++) {
        const element = todo[i];
        document.getElementById('todo-tasks').innerHTML += generateTodoHTML(element);
        id++
    }
    function generateTodoHTML(element) {
        return `<div class="task" draggable="true" ondragstart="startDragging(${id})">
        <span class="task-font" id="task">${element['Titel']}</span>
        <span>${element['Category']}</span>
         <div>
         <div>${element['Urgency']}</div>
         <span>${element['Description']}</span>
         <span>FR</span>
         </div>
         <span>${element['Due Date']}</span>
        </div>`;
    }

    //<div class="task-person" id="task-person">${element['responsibility']}</div>
}

function showInProgress() {
    let todo = AllTasksAsJSON.filter(t => t['Taskbox'] == 'inprogress');
    let id = 0;

    for (let i = 0; i < todo.length; i++) {
        const element = todo[i];
        document.getElementById('inprogress-tasks').innerHTML += generateTodoHTML(element);
        id++
    }
    function generateTodoHTML(element) {
        return `<div class="task" draggable="true" ondragstart="startDragging(${id})">
        <span class="task-font" id="task">${element['Titel']}</span>
        <span>${element['Category']}</span>
         <div>
         <div>${element['Urgency']}</div>
         <span>${element['Description']}</span>
         <span>FR</span>
         </div>
         <span>${element['Due Date']}</span>
        </div>`;
    }
}

function showTesting() {
    let todo = AllTasksAsJSON.filter(t => t['Taskbox'] == 'testing');
    let id = 0;

    for (let i = 0; i < todo.length; i++) {
        const element = todo[i];
        document.getElementById('testing-tasks').innerHTML += generateTodoHTML(element);
        id++
    }
    function generateTodoHTML(element) {
        return `<div class="task" draggable="true" ondragstart="startDragging(${id})">
        <span class="task-font" id="task">${element['Titel']}</span>
        <span>${element['Category']}</span>
         <div>
         <div>${element['Urgency']}</div>
         <span>${element['Description']}</span>
         <span>FR</span>
         </div>
         <span>${element['Due Date']}</span>
        </div>`;
    }
}

function showDone() {
    let todo = AllTasksAsJSON.filter(t => t['Taskbox'] == 'done');
    let id = 0;
    
    for (let i = 0; i < todo.length; i++) {
        const element = todo[i];
        document.getElementById('done-tasks').innerHTML += generateTodoHTML(element);
        id++
    }
    function generateTodoHTML(element) {
        return `<div class="task" draggable="true" ondragstart="startDragging(${id})">
        <span class="task-font" id="task">${element['Titel']}</span>
        <span>${element['Category']}</span>
         <div>
         <div>${element['Urgency']}</div>
         <span>${element['Description']}</span>
         <span>FR</span>
         </div>
         <span>${element['Due Date']}</span>
        </div>`;
    }
}


function startDragging(id) {
    currentDraggedElement = id;
}

function allowDrop(ev) {
    ev.preventDefault();

}

function moveTo(Taskbox) {
    AllTasksAsJSON[currentDraggedElement]['Taskbox'] = Taskbox;
    updateHTML();
}

function highlightToDo() {
    document.getElementById('todo-tasks').classList.add('bg-todo-highlight');
}

function removeHighlightToDo() {
    document.getElementById('todo-tasks').classList.remove('bg-todo-highlight');
}

function highlightInProgress() {
    document.getElementById('inprogress-tasks').classList.add('bg-progress-highlight');
}

function removeHighlightInProgress() {
    document.getElementById('inprogress-tasks').classList.remove('bg-progress-highlight');
}

function highlightTesting() {
    document.getElementById('testing-tasks').classList.add('bg-testing-highlight');
}

function removeHighlightTesting() {
    document.getElementById('testing-tasks').classList.remove('bg-testing-highlight');
}

function highlightDone() {
    document.getElementById('done-tasks').classList.add('bg-done-highlight');
}

function removeHighlightDone() {
    document.getElementById('done-tasks').classList.remove('bg-done-highlight');
}

