function login() {
    password = document.getElementById('password').value;
    email = document.getElementById('email').value;
    User = JSON.parse(backend.getItem('Users')) || [];
    let users = Users.find(u => password == u.password && email == u.email);
    if (user) {
        window.location.href = "./add-task.html";
    } else {
        alertFade(errormessage[0], 'danger', 'translateY(30vh)');
    }
}



function signUp() {
    email = document.getElementById("email").value;
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    Users = JSON.parse(backend.getItem('Users'));
    Users.push(createUser(username, email, password));
    backend.setItem('Users', JSON.stringify(Users));
    setTimeout(() => {
        window.location = "./add-task.html"
    }, 200);
}









function createUser(username, email, password) {
    return {
        "username": username,
        "email": email,
        "password": password,

    }
}