let AllTickets = [];
let Users = [{
        "username": "Sevdi",
        "email": "sevdi.azizi96@outlook.de",
        "password": "1234"

    },
    {
        "username": "Anil",
        "email": "anil-27@hotmail.de",
        "password": "1234"
    },

    {
        "username": "Flo",
        "email:": "flo@hotmail.de",
        "password": "password"
    }
];
let errormessage = ["E-mail or Password not matching", "All fields requiered", "Your tasks has been created ✔"]

function loadAllTickets() {
    let AllTicketsAsString = backend.getItem('AllTickets');
    AllTickets = JSON.parse(AllTicketsAsString) || []; // Wandelt text wieder in das alte JSON zurück

    console.log('loadedAllTickets', AllTickets);

}

function getRandomID(collection) {
    let newID = Math.floor(Math.random() * new Date().getTime());
    console.log(newID);
    return collection.some(elem => elem.uid == newID) ? getRandomID(collection) : newID;
}

setURL('http://gruppe-90.developerakademie.com/smallest_backend_ever');

async function init() {
    await downloadFromServer();
    AllTickets = JSON.parse(backend.getItem('AllTickets')) || [];
    User = JSON.parse(backend.getItem('Users')) || [];
}

function changeForm() {

    let login = document.getElementById('login-me');
    login.classList.add('d-none');

    document.getElementById("main").innerHTML = `
        <form onsubmit="signUp(); return false" id="login" class="form-signin">
      
                <h1 class="h3 mb-3 font-weight-normal">Join the community</h1>
                <label for="name" class="sr-only">Username</label>
                <input type="text" id="username" class="form-control" placeholder="Username" required="" autofocus="">
                <label class="sr-only">E-Mail address</label>
                <input type="email" id="email" class="form-control" placeholder="E-Mail address" required="" autofocus="">
                <label class="sr-only">Password</label>
                <input type="password" id="password" class="form-control" placeholder="Password" required="" autofocus="">
                <a href="../html/addTask.html">Login as Guest</a>
                <button class="btn btn-lg  btn-primary btn-block" type="submit" value="submit">Sign up</button>
                </form>
                `
}