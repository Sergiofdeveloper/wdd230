document.addEventListener('DOMContentLoaded', function () {
    var menuBtn = document.querySelector('.menu-btn');
    var menuLinks = document.querySelector('.menu-links');

    menuBtn.addEventListener('click', function () {
        menuLinks.classList.toggle('show-menu');
    });
});