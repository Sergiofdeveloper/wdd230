document.addEventListener('DOMContentLoaded', function () {
    var menuBtn = document.querySelector('.menu-btn');
    var menuLinks = document.querySelector('.menu-links');

    menuBtn.addEventListener('click', function () {
        console.log('Botón de menú clicado');
        menuLinks.classList.toggle('show-menu');
    });

    // Agrega un evento clic a cada enlace del menú
    var navItems = document.querySelectorAll('.menu-links a');
    navItems.forEach(function (item) {
        item.addEventListener('click', function () {
            // Oculta el menú después de hacer clic en un enlace
            menuLinks.classList.remove('show-menu');

            // Remueve la clase 'active' de todos los enlaces
            navItems.forEach(function (navItem) {
                navItem.classList.remove('active');
            });

            // Agrega la clase 'active' solo al enlace clicado
            item.classList.add('active');
        });
    });
});
