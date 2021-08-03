let currentDraggedElement;
let AllTasksAsJSON;

function updateBoardHTML() {
    clearHTML();
    showTodos();
    showInProgress();
    showTesting();
    showDone();
    checkUrgency();
    getUpperLetters();
    getCategory();
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
    let AllTicketsAsString = backend.getItem('AllTickets');
    AllTasksAsJSON = JSON.parse(AllTicketsAsString);
}

function showTodos() {
    let todo = AllTasksAsJSON.filter(t => t['Taskbox'] == 'todo');

    for (let i = 0; i < todo.length; i++) {
       // const element = todo[i];

        document.getElementById('todo-tasks').innerHTML += `
        <div class="task" draggable="true" ondragstart="startDragging(${i})">
          <span id="category${i}" class="category">${AllTickets[i].Category}</span>
          <div id="urgency${i}" class="urgency"></div>
          <span class="tasktitle"><b>${AllTickets[i].Titel}</b></span>
          <span class="taskmiddle">${AllTickets[i].Decription}</span>
         <div class="lowertask">
          <span class="name">${AllTickets[i].Name}</span>
          <span class="date">${AllTickets[i].DueDate}</span>
         </div>
        </div>`;
    }
    
    //<div class="task-person" id="task-person">${element['responsibility']}</div>
}

function showInProgress() {
    let inprogress = AllTasksAsJSON.filter(t => t['Taskbox'] == 'inprogress');


    for (let i = 0; i < inprogress.length; i++) {
        //const element = inprogress[i];
        document.getElementById('inprogress-tasks').innerHTML +=
        `
        <div class="task" draggable="true" ondragstart="startDragging(${i})">
          <span id="category${i}" class="category">${AllTickets[i].Category}</span>
          <div id="urgency${i}" class="urgency"></div>
          <span class="tasktitle"><b>${AllTickets[i].Titel}</b></span>
          <span class="taskmiddle">${AllTickets[i].Decription}</span>
         <div class="lowertask">
          <span class="name">${AllTickets[i].Name}</span>
          <span class="date">${AllTickets[i].DueDate}</span>
         </div>
        </div>`;
    } 
}

function showTesting() {
    let testing = AllTasksAsJSON.filter(t => t['Taskbox'] == 'testing');

    for (let i = 0; i < testing.length; i++) {
        //const element = testing[i];
        document.getElementById('testing-tasks').innerHTML += `
        <div class="task" draggable="true" ondragstart="startDragging(${i})">
          <span id="category${i}" class="category">${AllTickets[i].Category}</span>
          <div id="urgency${i}" class="urgency"></div>
          <span class="tasktitle"><b>${AllTickets[i].Titel}</b></span>
          <span class="taskmiddle">${AllTickets[i].Decription}</span>
         <div class="lowertask">
          <span class="name">${AllTickets[i].Name}</span>
          <span class="date">${AllTickets[i].DueDate}</span>
         </div>
        </div>`;
    }
}

function showDone() {
    let done = AllTasksAsJSON.filter(t => t['Taskbox'] == 'done');

    for (let i = 0; i < done.length; i++) {
        //const element = done[i];
        document.getElementById('done-tasks').innerHTML += `
        <div class="task" draggable="true" ondragstart="startDragging(${i})">
          <span id="category${i}" class="category">${AllTickets[i].Category}</span>
          <div id="urgency${i}" class="urgency"></div>
          <span class="tasktitle"><b>${AllTickets[i].Titel}</b></span>
          <span class="taskmiddle">${AllTickets[i].Decription}</span>
         <div class="lowertask">
          <span class="name">${AllTickets[i].Name}</span>
          <span class="date">${AllTickets[i].DueDate}</span>
         </div>
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
    backend.setItem('AllTickets', JSON.stringify(AllTasksAsJSON));
    updateBoardHTML();
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

function getUpperLetters() {
    for (let i = 0; i < AllTasksAsJSON.length; i++) {

        let names = AllTasksAsJSON[i]['Name'];
        let Uppercaseletters = names.replace(/[a-z,ü,ö,ä]/g, '');
        Uppercaseletters = Uppercaseletters.replace(' ', '');
        AllTasksAsJSON[i]['Name'] = Uppercaseletters;
        backend.setItem('AllTickets', JSON.stringify(AllTasksAsJSON));
        console.log(Uppercaseletters)
        
    }
}

function getCategory() {
    for (let i = 0; i < AllTasksAsJSON.length; i++) {

        let categories = AllTasksAsJSON[i]['Category'];
        let Uppercaseletters = categories.replace(/[a-z]/g, '');
        AllTasksAsJSON[i]['Category'] = Uppercaseletters;
        backend.setItem('AllTickets', JSON.stringify(AllTasksAsJSON));
        console.log(Uppercaseletters)

    }

}

function checkUrgency() {
    for (let i = 0; i < AllTasksAsJSON.length; i++) {

        if (AllTasksAsJSON[i]['Urgency'] == 'High') {
            document.getElementById(`urgency${i}`).classList.add('red');
        } else if (AllTasksAsJSON[i]['Urgency'] == 'Medium') {
            document.getElementById(`urgency${i}`).classList.add('yellow');
        } else if (AllTasksAsJSON[i]['Urgency'] == 'Low') {
            document.getElementById(`urgency${i}`).classList.add('green');
        }
    }
}
