document.addEventListener('DOMContentLoaded', function () {
    var menuBtn = document.querySelector('.menu-btn');
    var menuLinks = document.querySelector('.menu-links');

    menuBtn.addEventListener('click', function () {
        console.log('Botón de menú clicado');
        menuLinks.classList.toggle('show-menu');
    });
});