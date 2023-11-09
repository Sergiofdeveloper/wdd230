document.addEventListener("DOMContentLoaded", function () {
    const gridButton = document.querySelector("#grid");
    const listButton = document.querySelector("#list");
    const membersDisplay = document.querySelector("#members-display");

    // Función para cambiar la vista a "Grid"
    function showGrid() {
        membersDisplay.classList.add("grid");
        membersDisplay.classList.remove("list");
    }

    // Función para cambiar la vista a "List"
    function showList() {
        membersDisplay.classList.add("list");
        membersDisplay.classList.remove("grid");
    }

    // Event listeners para los botones
    gridButton.addEventListener("click", showGrid);
    listButton.addEventListener("click", showList);

    // Función para cargar y mostrar la información de los miembros desde el archivo JSON
    function loadMembersData() {
        fetch("data/members.json")
            .then((response) => response.json())
            .then((data) => {
                const companies = data.companies;

                // Limpiar el contenido antes de cargar las tarjetas
                membersDisplay.innerHTML = "";

                // Crear elementos HTML para cada empresa y agregarlos al DOM
                companies.forEach((company) => {
                    const companyCard = document.createElement("section");
                    companyCard.className = "company-card";

                    companyCard.innerHTML = `
                        <img src="images/${company.image}" alt="${company.name} Logo">
                        <h3>${company.name}</h3>
                        <p><strong>Address:</strong> ${company.address}</p>
                        <p><strong>Phone:</strong> ${company.phone}</p>
                        <p><strong>Website:</strong> <a href="${company.website}" target="_blank">${company.website}</a></p>
                        <p><strong>Membership Level:</strong> ${company.membership_level}</p>
                        <p><strong>Other Information:</strong> ${company.other_information}</p>
                    `;

                    // Agregar la tarjeta de la empresa al contenedor de visualización
                    membersDisplay.appendChild(companyCard);
                });
            })
            .catch((error) => console.error("Error fetching JSON:", error));
    }

    // Llamar a la función para cargar y mostrar la información de los miembros
    loadMembersData();
});
