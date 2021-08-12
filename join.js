let AllTickets = [];

function loadAllTickets() {
    let AllTicketsAsString = backend.getItem('AllTickets');
    AllTickets = JSON.parse(AllTicketsAsString) || []; // Wandelt text wieder in das alte JSON zurück

    console.log('loadedAllTickets', AllTickets);

}

function getRandomID(collection){
    let newID = Math.floor(Math.random()* new Date().getTime());
    console.log(newID);
    return collection.some(elem => elem.uid == newID) ? getRandomID(collection) : newID;
}


