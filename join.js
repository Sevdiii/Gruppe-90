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



function changeForm() {

    let login = document.getElementById('login-me');
    login.classList.add('d-none');

    document.getElementById("main").innerHTML = `
        <form  return false" id="login" class="form-signin extra">
      
                <h1 class="h3 mb-3 font-weight-normal">Join the community</h1>
                <label for="name" class="sr-only">Username</label>
                <input type="text" id="usernamee" class="form-control" placeholder="Username" required>
                <small id="info-ru" class="info-red d-none">Please enter username</small>
                <label class="sr-only">E-Mail address</label>
                <input type="emaill" id="emaill" class="form-control" placeholder="E-Mail address" required>
               <small id="info-r" class="info-red d-none">Please enter email address correctly</small>
              
                <label class="sr-only">Password</label>
                <input type="password" id="passwordd" class="form-control" placeholder="Password" required>
                <small id="info-rp" class="info-red d-none">Please enter a password</small> 
                <small id="info-rp1" class="info-red d-none">Please enter more than 5 characters</small> 
                <a class="joinguest" href="./add-task.html">Join as guest</a>
                <button  onclick="signUpUser(); ValidateEmail()" class="btn btn-lg  btn-primary btn-block" type="button" value="submit">Sign Up</button>

            

                <div id="create" class="createmessage d-none">
                <p>Your account has been registered<br> <font size="3">You will be redirected...</font size></p>   
                
               
          </div>
                </form>
                `
}