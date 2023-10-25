document.addEventListener("DOMContentLoaded", function () {
// 1️⃣ Comienza la variable del elemento de visualización
const visitsDisplay = document.querySelector(".visits");

// 2️⃣ Obtiene el VALOR almacenado para la CLAVE numberVisits en localStorage si existe.
// Si falta la CLAVE numVisits, entonces asigna 0 a la variable numVisits.
let numberVisits = Number(window.localStorage.getItem("numberVisits")) || 0;

// 3️⃣ Determina si esta es la primera visita o muestra el número de visitas
if (numberVisits !== 0) {
    visitsDisplay.textContent = `Page visits: ${numberVisits}`;
} else {
    visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

// 4️⃣ Aumenta el número de visitas en uno.
numberVisits++;

// 5️⃣ Almacena el nuevo total de visitas en localStorage, clave=numVisitas-ls
localStorage.setItem("numberVisits", numberVisits);
});