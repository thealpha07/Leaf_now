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
document.getElementById('contactForm').addEventListener('submit', submitForm);

//Submit form
function submitForm(e) {
    e.preventDefault();

    var name = readInputVal('nameField');
    var email = readInputVal('emailField');
    var message = readInputVal('messageField');

    writeData(name, email, message);
}

//Tot read from ID
function readInputVal(id) {
    return document.getElementById(id).value;
}

//Write data to firebase
function writeData(name, email, message) {
    set(ref(firebase, "ContactUs/" + email), { // Macha, the / after the String makes it child with value after +
            name: name,
            email: email,
            message: message
        })
        .then(() => {
            alert("Succesfull!! Message SENT");
        })
        .catch((error) => {
            alert("Message Unsuccesfull!! Message NOT SENT");
        });
}