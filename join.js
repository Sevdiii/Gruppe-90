let AllTickets = [];

function loadAllTickets() {
    let AllTicketsAsString = backend.getItem('AllTickets');
    AllTickets = JSON.parse(AllTicketsAsString) || []; // Wandelt text wieder in das alte JSON zurück

    console.log('loadedAllTickets', AllTickets);

}


function DeleteTickets(index) {
    AllTickets.splice(index, i);
    backend.setItem(
        "tickets", AllTickets
    );
}