document.addEventListener('DOMContentLoaded', function () {
  const rentalsTableContainer = document.getElementById('rentalsTableContainer');
  const fleetContainer = document.getElementById('fleet');

  // Function to create and populate the table
  function createRentalsTable(data) {
    const table = document.createElement('table');

    // Create table header
    const headerRow = table.insertRow();
    const columnsToDisplay = ['Rental Type', 'Max. Persons', 'cc', 'Accessories1', 'Accessories2', 'Horse power', 'Reservation', 'Walk in'];
    columnsToDisplay.forEach(column => {
      const th = document.createElement('th');
      th.textContent = column;
      headerRow.appendChild(th);
    });

    // Create table rows
    data.rentals.forEach(rental => {
      const row = table.insertRow();
      columnsToDisplay.forEach(column => {
        const cell = row.insertCell();

        if (column === 'Image') {
          // Skip the Image column
          return;
        } else if (column === 'Reservation' || column === 'Walk in') {
          const subCell = document.createElement('div');
          subCell.className = 'reservation-info';
          
          for (const subKey in rental[column]) {
            const subElement = document.createElement('div');
            subElement.textContent = `${subKey}: ${rental[column][subKey]}`;
            subCell.appendChild(subElement);
          }

          cell.appendChild(subCell);
        } else {
          cell.className = 'normal-cell';
          
          if (column === 'Rental Type') {
            // If the column is 'Rental Type', add the information below it
            cell.textContent = rental[column];
            
            // Add additional information below 'Rental Type'
            const infoCell = row.insertCell();
            infoCell.className = 'normal-cell';
            infoCell.textContent = `CC: ${rental['cc']}, Accessories1: ${rental['Accessories1']}, Accessories2: ${rental['Accessories2']}, Horse power: ${rental['Horse power']}`;
          } else {
            cell.textContent = rental[column];
          }
        }
      });
    });

    rentalsTableContainer.appendChild(table);
  }

  // Fetch JSON data
  fetch('data/rentals.json')
    .then(response => response.json())
    .then(data => {
      // Call the function with the retrieved JSON data
      createRentalsTable(data);

      // Create and populate the fleet
      data.rentals.forEach(rental => {
        const rentalDiv = document.createElement('div');
        rentalDiv.className = 'fleet-item';

        const img = document.createElement('img');
        img.src = rental['Image'];
        img.alt = rental['Rental Type'];
        img.loading = 'lazy';

        const productName = document.createElement('div');
        productName.textContent = rental['Rental Type'];

        rentalDiv.appendChild(img);
        rentalDiv.appendChild(productName);

        fleetContainer.appendChild(rentalDiv);
      });
    })
    .catch(error => {
      console.error('Error fetching JSON:', error);
    });
});
