let AllTickets = [];



function createTicket() {


    let titel = document.getElementById('title');
    let duedate = document.getElementById('duedate');
    let decription = document.getElementById('description');
    let urgency = document.getElementById('urgency-select');
    let category = document.getElementById('category-select');

    let TICKET = { // Innerer JSON wird erstellt in der Funktion
        'Titel': titel.value,
        'Due Date': duedate.value,
        'Category': category.value,
        'Urgency': urgency.value,
        'Decription': decription.value

    };




    AllTickets.push(TICKET); // Innere JSON wird in den leeren globales JSON gepusht
    let AllTicketsAsString = JSON.stringify(AllTickets); // Wandelt JSON in einem Text
    localStorage.setItem('AllTickets', AllTicketsAsString); // speichert Text im LocalStorage
    console.log(AllTickets);


    titel.value = ''; //value leersetzen
    duedate.value = '';
    category.value = '';
    urgency.value = '';
    decription.value = '';


}


function loadAllTickets() {
    let AllTicketsAsString = localStorage.getItem('AllTickets');
    AllTickets = JSON.parse(AllTicketsAsString) || []; // Wandelt text wieder in das alte JSON zurück

    console.log('loadedAllTickets', AllTickets);

}

function ShowTicket() {
    let AllTicketsAsString = localStorage.getItem('AllTickets');


    document.getElementById('showAllTicket').innerHTML = `Ihre Tickets: ${AllTicketsAsString}`;
}

function cancel() {
    window.location.reload();
}