document.addEventListener('DOMContentLoaded', function () {
    var menuLinksContainer = document.querySelector('.menu-links');

    // Agrega la clase show-menu al cargar la página
    menuLinksContainer.classList.add('show-menu');

    var menuBtn = document.querySelector('.menu-btn');

    menuBtn.addEventListener('click', function () {
        menuLinksContainer.classList.toggle('show-menu');
    });

    var menuLinks = document.querySelectorAll('.menu-links a');

    menuLinks.forEach(function (link) {
        if (link.href === window.location.href) {
            link.parentNode.classList.add('active');
        }
    });
});
