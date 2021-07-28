let AllTickets = [];




function loadAllTickets() {
    let AllTicketsAsString = localStorage.getItem('AllTickets');
    AllTickets = JSON.parse(AllTicketsAsString) || []; // Wandelt text wieder in das alte JSON zurück

    console.log('loadedAllTickets', AllTickets);

}

function ShowTicket() {
    let AllTicketsAsString = localStorage.getItem('AllTickets');


    document.getElementById('showAllTicket').innerHTML = `Ihre Tickets: ${AllTicketsAsString}`;
}