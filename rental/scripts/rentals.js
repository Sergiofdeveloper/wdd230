// Haciendo una solicitud asíncrona para obtener datos JSON desde un archivo
async function getRentalsData() {
    const response = await fetch('data/rentals.json');
    const data = await response.json();
    return data;
  }
  
  // Function to populate the table
  async function populateTable() {
    // Obtener los datos de alquiler de la función asincrónica
    const rentalsData = await getRentalsData();
    const tableBody = document.getElementById('rentalsTableBody');
  
    // Llenar la tabla con los datos obtenidos
    rentalsData.rentals.forEach(rental => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${rental['Rental Type']}</td>
        <td>${rental['Max. Persons']}</td>
        <td>${rental.Prices.Reservation['Half Day (3 hrs)']}</td>
        <td>${rental.Prices.Reservation['Full Day']}</td>
        <td>${rental.Prices['Walk in']['Half Day']}</td>
        <td>${rental.Prices['Walk in']['Full Day']}</td>
        <td><img src="${rental.Image}" alt="${rental['Rental Type']}"></td>
      `;
  
      tableBody.appendChild(row);
    });
  }
  
  // Call the function to populate the table
  populateTable();
  