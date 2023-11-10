document.addEventListener("DOMContentLoaded", function () {
    const gridButton = document.querySelector("#grid");
    const listButton = document.querySelector("#list");
    const membersDisplay = document.querySelector("#members-display");
  
    gridButton.addEventListener("click", () => {
        membersDisplay.classList.add("grid");
        membersDisplay.classList.remove("list");
    });
  
    listButton.addEventListener("click", () => {
        membersDisplay.classList.add("list");
        membersDisplay.classList.remove("grid");
    });
  
    // Función para cargar y mostrar la información de los miembros desde el archivo JSON
    function loadMembersData() {
        fetch("data/members.json")
            .then((response) => response.json())
            .then((data) => {
                const companies = data.companies;
  
                // Crear elementos HTML para cada empresa y agregarlos al DOM
                companies.forEach((company) => {
                    const companyCard = document.createElement("section");
                    companyCard.className = "company-card";
  
                    if (membersDisplay.classList.contains("grid")) {
                        // En el modo de cuadrícula, mostrar el logo de la empresa
                        companyCard.innerHTML = `
                            <img src="images/${company.image}" alt="${company.name} Logo">
                            <p class="sr-only">${company.name}</p>
                            <p><strong>Address:</strong> ${company.address}</p>
                            <p><strong>Phone:</strong> ${company.phone}</p>
                            <p><strong>Website:</strong> <a href="${company.website}" target="_blank">${company.website}</a></p>
                            <p class="membership" style="display: none;"><strong>Membership Level:</strong> ${company.membership_level}</p>
                            <p class="other-information" style="display: none;"><strong>Other Information:</strong> ${company.other_information}</p>
                        `;
                    } else {
                        // En el modo de lista, no mostrar el logo de la empresa
                        companyCard.innerHTML = `
                            <h3>${company.name}</h3>
                            <p><strong>Address:</strong> ${company.address}</p>
                            <p><strong>Phone:</strong> ${company.phone}</p>
                            <p><strong>Website:</strong> <a href="${company.website}" target="_blank">${company.website}</a></p>
                            <p class="membership" style="display: none;"><strong>Membership Level:</strong> ${company.membership_level}</p>
                            <p class="other-information" style="display: none;"><strong>Other Information:</strong> ${company.other_information}</p>
                        `;
                    }
  
                    // Agregar la tarjeta de la empresa al contenedor de visualización
                    membersDisplay.appendChild(companyCard);
                });
            })
            .catch((error) => console.error("Error fetching JSON:", error));
    }
  
    // Llamar a la función para cargar y mostrar la información de los miembros
    loadMembersData();
});
