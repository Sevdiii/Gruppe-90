async function createTicket() {


    let name = document.getElementById('name');
    let titel = document.getElementById('title');
    let duedate = document.getElementById('duedate');
    let decription = document.getElementById('description');
    let urgency = document.getElementById('urgency-select');
    let category = document.getElementById('category-select');

    let TICKET = { // Innerer JSON wird erstellt in der Funktion
        'Name': name.value,
        'Titel': titel.value,
        'DueDate': duedate.value,
        'Category': category.value,
        'Urgency': urgency.value,
        'Decription': decription.value,
        'Taskbox': 'todo',
        'ID': getRandomID(AllTickets),
    };


    AllTickets.push(TICKET); // Innere JSON wird in den leeren globales JSON gepusht
    let AllTicketsAsString = JSON.stringify(AllTickets); // Wandelt JSON in einem Text
    await backend.setItem('AllTickets', AllTicketsAsString); // speichert Text im LocalStorage
    console.log(AllTickets);

    name.value = ''; //value leersetzen
    titel.value = '';
    duedate.value = '';
    category.value = '';
    urgency.value = '';
    decription.value = '';

}


function cancel() {
    window.location.reload();
}