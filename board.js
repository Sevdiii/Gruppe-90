let currentDraggedElement;

function updateBoardHTML() {
    clearHTML();
    showTaskbox('todo');
    showTaskbox('inprogress');
    showTaskbox('testing');
    showTaskbox('done');
    getUpperLetters();
    getCategory();
    checkUrgency();
    removeHighlightTaskbox('todo');
    removeHighlightTaskbox('inprogress');
    removeHighlightTaskbox('testing');
    removeHighlightTaskbox('done');

}

function clearHTML() {
    document.getElementById('todo-tasks').innerHTML = '';
    document.getElementById('inprogress-tasks').innerHTML = '';
    document.getElementById('testing-tasks').innerHTML = '';
    document.getElementById('done-tasks').innerHTML = '';
}

function showTaskbox(taskBox) {
    let boxes = AllTickets.filter(t => t['Taskbox'] == taskBox)

    for (let i = 0; i < boxes.length; i++) {
        document.getElementById(taskBox+'-tasks').innerHTML += `
        <div class="task" draggable="true" ondragstart="startDragging(${boxes[i]['ID']})">
          <span id="category${i}" class="category">${boxes[i].Category}</span>
          <div id="urgency${boxes[i]['ID']}" class="urgency"></div>
          <span class="tasktitle"><b>${boxes[i].Titel}</b></span>
          <span class="taskmiddle">${boxes[i].Decription}</span>
         <div class="lowertask">
          <span class="name">${boxes[i].Name}</span>
          <div> <img onclick="deleteTicket(${boxes[i]['ID']})" class="trash" src="img/trash.png"></div>
          <span class="date">${boxes[i].DueDate}</span>
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
    let currentDraggedTask = AllTickets.find(ticket => ticket.ID == currentDraggedElement);
    currentDraggedTask['Taskbox'] = Taskbox;
    backend.setItem('AllTickets', JSON.stringify(AllTickets));
    updateBoardHTML();
}

function highlightTaskbox(taskBox){
    //document.getElementById(taskBox+'-tasks').classList.add('bg-'+taskBox+'-hightlight');
    document.getElementById(taskBox+'-tasks').classList.add('bg-'+taskBox+'-highlight');
}

function removeHighlightTaskbox(taskBox){
    //document.getElementById(taskBox+'-tasks').classList.remove('bg-'+taskBox+'-hightlight');
    document.getElementById(taskBox+'-tasks').classList.remove('bg-'+taskBox+'-highlight');
}

function getUpperLetters() {
    for (let i = 0; i < AllTickets.length; i++) {

        let names = AllTickets[i]['Name'];
        let Uppercaseletters = names.replace(/[a-z,ü,ö,ä]/g, '');
        Uppercaseletters = Uppercaseletters.replace(' ', '');
        AllTickets[i]['Name'] = Uppercaseletters;
        backend.setItem('AllTickets', JSON.stringify(AllTickets));
        console.log(Uppercaseletters)

    }
}

function getCategory() {
    for (let i = 0; i < AllTickets.length; i++) {

        let categories = AllTickets[i]['Category'];
        let Uppercaseletters = categories.replace(/[a-z]/g, '');
        AllTickets[i]['Category'] = Uppercaseletters;
        backend.setItem('AllTickets', JSON.stringify(AllTickets));
        console.log(Uppercaseletters)

    }

}

function checkUrgency() {
    
    for (let i = 0; i < AllTickets.length; i++) {
        let urgency = AllTickets[i]['Urgency'];
        
        if (urgency == 'High') {
            document.getElementById(`urgency${AllTickets[i]['ID']}`).classList.add('red');
          //  backend.setItem('AllTickets', JSON.stringify(AllTickets));
        } else if (urgency == 'Medium') {
            document.getElementById(`urgency${AllTickets[i]['ID']}`).classList.add('yellow');
          //  backend.setItem('AllTickets', JSON.stringify(AllTickets));
        }
        else if (urgency == 'Low') {
            document.getElementById(`urgency${AllTickets[i]['ID']}`).classList.add('green');
           // backend.setItem('AllTickets', JSON.stringify(AllTickets));
        }
        backend.setItem('AllTickets', JSON.stringify(AllTickets));
    }
}

function deleteTicket(id) {
    AllTickets = JSON.parse(backend.getItem("AllTickets"));
    let getID = AllTickets.findIndex(obj => obj.ID==id);
    console.log(getID);
    AllTickets.splice(getID, 1);
    backend.setItem('AllTickets', JSON.stringify(AllTickets));
    if (window.location.href.indexOf('board') > -1) {
        document.getElementById('todo-tasks').innerHTML = '';
        document.getElementById('inprogress-tasks').innerHTML = '';
        document.getElementById('testing-tasks').innerHTML = '';
        document.getElementById('done-tasks').innerHTML = '';
    }
    if (window.location.href.indexOf("allboard") > -1) {

    }
    updateBoardHTML();
}
