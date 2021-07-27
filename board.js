let tasks = [{
    'id': 0,
    'title': 'Drag and Drop hinzufügen',
    'responsibility': 'Florian Rehm',
    'date': '20.07.21',
    'category': 'todo',
},
{
    'id': 1,
    'title': 'Task hinzufügen',
    'responsibility': 'Sevdi Azizi',
    'date': '20.07.21',
    'category': 'todo',
},
{
    'id': 2,
    'title': 'Backlog erstellen',
    'responsibility': 'Anil Cokbilir',
    'date': '20.07.21',
    'category': 'todo',
},
{
    'id': 3,
    'title': 'Nav Bar erstellen',
    'responsibility': 'Anil Cokbilir',
    'date': '20.07.21',
    'category': 'todo',
},
{
    'id': 4,
    'title': 'Board erstellen',
    'responsibility': 'Florian Rehm',
    'date': '20.07.21',
    'category': 'todo',
}];

let currentDraggedElement;

function updateHTML() {
    includeHTML();
    clearHTML();
    showTodos();
    showInProgress();
    showTesting();
    showDone();
    removeHighlightDone();
    removeHighlightInProgress();
    removeHighlightTesting();
    removeHighlightToDo();
    
}

function clearHTML(){
    document.getElementById('todo-tasks').innerHTML = '';
    document.getElementById('inprogress-tasks').innerHTML = '';
    document.getElementById('testing-tasks').innerHTML = '';
    document.getElementById('done-tasks').innerHTML = '';
}


function showTodos(){
    let todo = tasks.filter(t => t['category'] == 'todo');

    for (let index = 0; index < todo.length; index++) {
        const element = todo[index];
        document.getElementById('todo-tasks').innerHTML += generateTodoHTML(element);
    }

    function generateTodoHTML(element) {
        return `<div class="task" draggable="true" ondragstart="startDragging(${element['id']})">
        <span class="task-font" id="task">${element['title']}</span>
        <div class="task-person" id="task-person">${element['responsibility']}</div>
        </div>`;
    }
}

function showInProgress(){
    let todo = tasks.filter(t => t['category'] == 'inprogress');

    for (let index = 0; index < todo.length; index++) {
        const element = todo[index];
        document.getElementById('inprogress-tasks').innerHTML += generateTodoHTML(element);
    }

    function generateTodoHTML(element) {
        return `<div class="task" draggable="true" ondragstart="startDragging(${element['id']})">
        <span class="task-font" id="task">${element['title']}</span>
        <div class="task-person" id="task-person">${element['responsibility']}</div>
        </div>`;
    }
}

function showTesting(){
    let todo = tasks.filter(t => t['category'] == 'testing');

    for (let index = 0; index < todo.length; index++) {
        const element = todo[index];
        document.getElementById('testing-tasks').innerHTML += generateTodoHTML(element);
    }

    function generateTodoHTML(element) {
        return `<div class="task" draggable="true" ondragstart="startDragging(${element['id']})">
        <span class="task-font" id="task">${element['title']}</span>
        <div class="task-person" id="task-person">${element['responsibility']}</div>
        </div>`;
    }
}

function showDone(){
    let todo = tasks.filter(t => t['category'] == 'done');

    for (let index = 0; index < todo.length; index++) {
        const element = todo[index];
        document.getElementById('done-tasks').innerHTML += generateTodoHTML(element);
    }

    function generateTodoHTML(element) {
        return `<div class="task" draggable="true" ondragstart="startDragging(${element['id']})">
        <span class="task-font" id="task">${element['title']}</span>
        <div class="task-person" id="task-person">${element['responsibility']}</div>
        </div>`;
    }
}

function startDragging(id){
    currentDraggedElement = id;
}

function allowDrop(ev) {
    ev.preventDefault();
    
}

function moveTo(category){
    tasks[currentDraggedElement]['category'] = category;
    updateHTML();    
}

function highlightToDo(){
    document.getElementById('todo-tasks').classList.add('bg-todo-highlight');
}

function removeHighlightToDo(){
    document.getElementById('todo-tasks').classList.remove('bg-todo-highlight');
}

function highlightInProgress(){
    document.getElementById('inprogress-tasks').classList.add('bg-progress-highlight');
}

function removeHighlightInProgress(){
    document.getElementById('inprogress-tasks').classList.remove('bg-progress-highlight');
}

function highlightTesting(){
    document.getElementById('testing-tasks').classList.add('bg-testing-highlight');
}

function removeHighlightTesting(){
    document.getElementById('testing-tasks').classList.remove('bg-testing-highlight');
}

function highlightDone(){
    document.getElementById('done-tasks').classList.add('bg-done-highlight');
}

function removeHighlightDone(){
    document.getElementById('done-tasks').classList.remove('bg-done-highlight');
}

