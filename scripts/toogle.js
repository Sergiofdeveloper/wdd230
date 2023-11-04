const hamburgerButton = document.getElementById('hamburger');
const menuList = document.querySelector('nav ul');
let isMenuOpen = false;

function toggleMenu() {
  if (window.innerWidth < 768) {
    if (isMenuOpen) {
      menuList.style.display = 'none';
      hamburgerButton.innerHTML = '&#8801;';
    } else {
      menuList.style.display = 'block';
      hamburgerButton.innerHTML = '✕';
    }
    isMenuOpen = !isMenuOpen;
  }
}

hamburgerButton.addEventListener('click', toggleMenu);