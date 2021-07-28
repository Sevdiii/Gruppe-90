function createTicket() {


    let titel = document.getElementById('title');
    let duedate = document.getElementById('duedate');
    let decription = document.getElementById('description');
    let urgency = document.getElementById('urgency-select');
    let category = document.getElementById('category-select');

    let TICKET = { // Innerer JSON wird erstellt in der Funktion
        'Titel': titel.value,
        'DueDate': duedate.value,
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


function cancel() {
    window.location.reload();
}