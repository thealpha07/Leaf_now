//Login Dialog
let loginform = document.querySelector('.subLogin');

document.querySelector('#loginButton').onclick = () => {
    loginform.classList.toggle('active');
}

//Initialize Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getDatabase, ref, set, push, child, update, remove } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyC1jo1ZGSqtO12VM9HWHfVypExBcq_WOYg",
    authDomain: "leafnow-8aae8.firebaseapp.com",
    databaseURL: "https://leafnow-8aae8-default-rtdb.firebaseio.com",
    projectId: "leafnow-8aae8",
    storageBucket: "leafnow-8aae8.appspot.com",
    messagingSenderId: "128821849126",
    appId: "1:128821849126:web:4f4093e8fbeb4b961e8ae7",
    measurementId: "G-5K912F1ZNH"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firebase = getDatabase();

//Message Submission
document.getElementById('registerForm').addEventListener('submit', submitForm);

//Submit form
let i = 0;

function submitForm(e) {
    e.preventDefault();

    var name = readInputVal('nameField');
    var username = readInputVal('usernameField');
    var email = readInputVal('emailField');
    var phone = readInputVal('phoneField');
    var password = readInputVal('passwordField');
    var gen = document.getElementsByName('gender'); //Radio Button Value cannot be directly read

    for (i = 0; i < gen.length; i++) {

        if (gen[i].type = "radio") {

            if (gen[i].checked)
                var gender = gen[i].value;
        }
    }

    writeData(name, username, email, phone, password, gender);
}

//Tot read from ID
function readInputVal(id) {
    return document.getElementById(id).value;
}

//Write data to firebase
function writeData(name, username, email, phone, password, gender) {
    var crypt = encryptPassword(password);
    set(ref(firebase, "UserRegistry/" + username), { // Macha, the / after the String makes it child with value after +
            name: name,
            username: username,
            email: email,
            phone: phone,
            password: crypt,
            gender: gender
        })
        .then(() => {
            alert("Succesfull!! User Registered");
            window.location.href = "index.html";
        })
        .catch((error) => {
            alert("Message Unsuccesfull!! User NOT Registered");
        });
}

function encryptPassword(pass) {
    return sha256(pass);
}