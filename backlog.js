var i;

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
<<<<<<< HEAD
        <a onclick="DeleteTickets()" id="splice">X</a>
=======
        <a onclick="DeleteArray(${i})" id="splice">X</a>
>>>>>>> c9f074ab2a8e932b30858d13597c3c4f2fc720f2
        </div>

    `

    };

}


<<<<<<< HEAD
function DeleteTickets(index) {
    AllTickets.splice(index, i);
    backend.setItem('AllTickets', AllTicketsAsString);
=======

function DeleteArray(i) {
    AllTickets = JSON.parse(backend.getItem("AllTickets"));
    AllTickets.splice(i, 1);
    backend.setItem('AllTickets', JSON.stringify(AllTickets));
    if (window.location.href.indexOf('backlog') > -1) {
        document.getElementById("backlog").innerHTML = "";
    }
    if (window.location.href.indexOf("allboard") > -1) {

    }
>>>>>>> c9f074ab2a8e932b30858d13597c3c4f2fc720f2
}