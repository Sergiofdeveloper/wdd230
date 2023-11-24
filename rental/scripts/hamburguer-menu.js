const hamburgerButton = document.querySelector('.hamburger');
const menuList = document.querySelector('.menu-links ul');

function toggleMenu() {
    if (menuList.style.display === 'block' || menuList.style.display === '') {
        menuList.style.display = 'none';
        hamburgerButton.innerHTML = '&#9776;';
    } else {
        menuList.style.display = 'block';
        hamburgerButton.innerHTML = '✕';
    }
}

hamburgerButton.addEventListener('click', toggleMenu);


