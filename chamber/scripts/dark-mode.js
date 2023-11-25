const menuToggle = document.getElementById('menuToggle');
const contentWrapper = document.getElementById('content-wrapper');
const header = document.querySelector('header');
const container = document.querySelector('.container');
const footer = document.querySelector('footer');
const currentEvents = document.querySelector('.current-events');
const weatherCard = document.querySelector('.weather-card');
const elementsToApplyDarkMode = document.querySelectorAll(
    '.company-advertisements, .advertisement'
  );const cta = document.querySelector('.cta');
let isDarkMode = false;  

menuToggle.addEventListener('change', function () {
    if (this.checked) {
        // cambiar a modo oscuro
        contentWrapper.style.backgroundColor = "#000";
        contentWrapper.style.color = "#fff";
        header.style.backgroundColor = "#000";
        container.style.backgroundColor = "#000";
        footer.style.backgroundColor = "#000";
        currentEvents.style.backgroundColor = "https://sergiofdeveloper.github.io/wdd230/chamber/images/dark-mode.webp";
        currentEvents.style.color = "#fff";
        weatherCard.style.backgroundColor = "https://sergiofdeveloper.github.io/wdd230/chamber/images/dark-mode.webp";
        weatherCard.style.color = "#fff";
        cta.style.backgroundColor = "#000";
        cta.style.color = "#fff";
        elementsToApplyDarkMode.forEach((element) => {
            element.style.backgroundColor = "#000";
            element.style.color = "#fff";
          });
        isDarkMode = true;
    } else {
        // apagar modo oscuro
        contentWrapper.style.backgroundColor = "#fff";
        contentWrapper.style.color = "#000";
        header.style.backgroundColor = "#a02c32";
        container.style.backgroundColor = "transparent";
        footer.style.backgroundColor = "#a02c32";
        currentEvents.style.color = "#000";
        weatherCard.style.color = "#000";
        cta.style.backgroundColor = "#fff";
        cta.style.color = "#000";
        elementsToApplyDarkMode.forEach((element) => {
            element.style.backgroundColor = "#fbefee";
            element.style.color = "#000";
          });
        isDarkMode = false;
    }
});