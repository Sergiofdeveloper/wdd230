const menuToggle = document.getElementById('menuToggle');
const contentWrapper = document.getElementById('content-wrapper');
let isDarkMode = false; // Initial state

menuToggle.addEventListener('change', function () {
    if (this.checked) {
        // Turn on dark mode
        contentWrapper.style.backgroundColor = "#000";
        contentWrapper.style.color = "#fff";
        isDarkMode = true;
    } else {
        // Turn off dark mode
        contentWrapper.style.backgroundColor = "#eee";
        contentWrapper.style.color = "#000";
        isDarkMode = false;
    }
});