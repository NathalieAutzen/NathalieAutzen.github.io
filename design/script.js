// Selecting element in the HTML document:
const hamburger = document.querySelector('.hamburger');
console.log(hamburger); //to see what is in the varible: hamburger
const navMenu = document.querySelector('.nav-menu');
const navLink = document.querySelectorAll('.nav-link');
console.log(navLink);

// Listening for a click event on the hamburger button:
hamburger.addEventListener('click', mobileMenu);

//eventlistener for all navLinks:
navLink.forEach(n => n.addEventListener('click',closeMenu));

function mobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// when a menu-item is clicked - the active classes are removed from hamburger and navMenu
function closeMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}