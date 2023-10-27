document.addEventListener("DOMContentLoaded", function () {
    //  fecha actual en milisegundos
    const currentDate = Date.now();

    // recoge la ultima visita de localStorage
    const lastVisit = localStorage.getItem("lastVisit");

    // primera visita
    if (!lastVisit) {
        // Mensaje de bienvenida
        document.getElementById("visit-message").textContent = "Welcome! Let us know if you have any questions.";
    } else {
        // Calcula en tiempo entre visitas en milisegundos
        const timeDifference = currentDate - lastVisit;

       // Calcula en tiempo entre visitas en dias
        const daysBetweenVisits = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysBetweenVisits === 1) {
            // mensaje cuando solo un dia
            document.getElementById("visit-message").textContent = `You last visited 1 day ago.`;
        } else if (daysBetweenVisits > 1) {
            // mensaje para mas de un dia
            document.getElementById("visit-message").textContent = `You last visited ${daysBetweenVisits} days ago.`;
        } else {
            // Mensaje para menos de un dia
            document.getElementById("visit-message").textContent = "Back so soon! Awesome!";
        }
    }

    // Guarda la fecha en localStorage
    localStorage.setItem("lastVisit", currentDate);
});