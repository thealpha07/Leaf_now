//Login Dialog
let loginform = document.querySelector('.subLogin');

document.querySelector('#loginButton').onclick = () => {
    loginform.classList.toggle('active');
}

function printPage() {
    window.print();
}