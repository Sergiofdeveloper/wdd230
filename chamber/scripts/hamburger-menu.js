const hamburgerButton = document.getElementById('hamburger');
const menuList = document.querySelector('nav ul');

function toggleMenu() {
  if (menuList.style.display === 'block' || menuList.style.display === '') {
    menuList.style.display = 'none';
    hamburgerButton.innerHTML = '&#8801;';
  } else {
    menuList.style.display = 'block';
    hamburgerButton.innerHTML = '✕';
  }
}

hamburgerButton.addEventListener('click', toggleMenu);
