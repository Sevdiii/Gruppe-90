let AllTickets = [];




function loadAllTickets() {
    let AllTicketsAsString = localStorage.getItem('AllTickets');
    AllTickets = JSON.parse(AllTicketsAsString) || []; // Wandelt text wieder in das alte JSON zurück

    console.log('loadedAllTickets', AllTickets);

}