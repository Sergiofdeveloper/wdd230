const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('show-menu');
    menuButton.classList.toggle('open'); // Add or remove the "open" class
});