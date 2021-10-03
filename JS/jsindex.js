//Menu for Smaller Screen
let menu = document.querySelector('#menuBar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header2');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

});

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if (window.scrollY > 250) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}

//Login Dialog
let loginform = document.querySelector('.loginForm');

document.querySelector('#loginButton').onclick = () => {
    loginform.classList.toggle('active');
}

// Slider from Swiper
var swiper = new Swiper(".homeSlider", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
});