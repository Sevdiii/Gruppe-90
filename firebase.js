// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC1zovj7RBnN2UU1sxacNbZm3rqSi_9SRA",
    authDomain: "gruppe-90-projekt.firebaseapp.com",
    projectId: "gruppe-90-projekt",
    storageBucket: "gruppe-90-projekt.appspot.com",
    messagingSenderId: "1077469833109",
    appId: "1:1077469833109:web:b8592fbd6e07ac1ad5f89c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function signUpUser() {
    let email = document.getElementById('emaill').value;
    let password = document.getElementById('passwordd').value;
    let username = document.getElementById('usernamee').value;


    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((msg) => {
            console.log('Registration complete:', msg);

            document.getElementById('create').classList.remove('d-none');

            setTimeout(() => {
                window.location.href = "./index.html";
            }, 3000);

        })
        .catch((error) => {
            console.log('Registration error:', error)


            //write Password



            if (document.getElementById('passwordd').value == "") {

                document.getElementById('info-rp').classList.remove('d-none');
                document.getElementById('passwordd').style.borderColor = "red";

                setTimeout(() => {
                    document.getElementById('info-rp').classList.add('d-none');
                }, 3000);

                //Password not lower than
            } else if (password.length < 6) {
                document.getElementById('passwordd').style.borderColor = "red";
                document.getElementById('info-rp1').classList.remove('d-none');

                setTimeout(() => {
                    document.getElementById('info-rp1').classList.add('d-none');
                }, 3000);

            } else if (username == "") {
                document.getElementById('usernamee').style.borderColor = "red";
                document.getElementById('info-ru').classList.remove('d-none');

                setTimeout(() => {
                    document.getElementById('info-ru').classList.add('d-none');
                }, 3000);
            }









        });
}


function signInUser() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in

            console.log('SignIn-User', userCredential);
            window.location.href = "./add-task.html";
        })
        .catch((error) => {
            console.log('SignIn-failed', error);
        });
}



function ValidateEmail(mail) {
    let email = document.getElementById('emaill');
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}