loadAllTickets();





function backlog() {
    for (let i = 0; i < AllTickets.length; i++) {
        document.getElementById('backlog').innerHTML += `
        
        <div class="content">
        <div class="width17 assigned">
            <img src="./img/user.png">
            <div class="name width17">
                <p>${AllTickets[i].Name}</p>
               
            </div>
        </div>
        <div id="title" class="width17">${AllTickets[i].Titel}</div>
        <div class="width17">${AllTickets[i].DueDate}</div>

        <p  class="width17">${AllTickets[i].Category}</p>
        <p class="width30">${AllTickets[i].Decription}</p>
        </div>

    `

    };
}