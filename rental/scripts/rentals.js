document.addEventListener('DOMContentLoaded', function () {
  const rentalsTableContainer = document.getElementById('rentalsTableContainer');
  const fleetContainer = document.getElementById('fleet');

  // Function createstable
  function createRentalsTable(data) {
    const table = document.createElement('table');

    // Creates table header
    const headerRow = table.insertRow();
    const columnsToDisplay = ['Rental Type', 'Max. Persons', 'Reservation', 'Walk in'];
    columnsToDisplay.forEach(column => {
      const th = document.createElement('th');
      th.textContent = column;
      headerRow.appendChild(th);
    });

    // Creates table rows
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

          const subList = document.createElement('ul');

          for (const subKey in rental[column]) {
            const listItem = document.createElement('li');
            // Añadir el label solo si la subKey no es numérica
            listItem.textContent = isNaN(subKey) ? `${subKey}: ${rental[column][subKey]}` : rental[column][subKey];
            subList.appendChild(listItem);
          }

          subCell.appendChild(subList);
          cell.appendChild(subCell);
        } else {
          cell.className = 'normal-cell';
          // shows only the value, no label
          cell.textContent = rental[column];
        }
      });
    });

    rentalsTableContainer.appendChild(table);
  }

  // Fetch JSON  
  fetch('data/rentals.json')
    .then(response => response.json())
    .then(data => {
      // Call the function with the retrieved JSON data
      createRentalsTable(data);

      // Add fleet items
      data.rentals.forEach(rental => {
        const rentalDiv = document.createElement('div');
        rentalDiv.className = 'fleet-item';

        const img = document.createElement('img');
        img.src = rental['Image'];
        img.alt = rental['Rental Type'];
        img.loading = 'lazy';

        const productName = document.createElement('div');
        productName.className = 'product-name';
        // Show Rental Type values
        productName.textContent = rental['Rental Type'];

        const additionalInfo = document.createElement('div');
        additionalInfo.className = 'additional-info';

        additionalInfo.style.textAlign = 'left';
        const infoList = document.createElement('ul');

        const propertiesToShow = ['cc', 'Accessories1', 'Accessories2', 'Horse power'];
        propertiesToShow.forEach(property => {
          const listItem = document.createElement('li');
          listItem.textContent = rental[property];
          infoList.appendChild(listItem);
        });

        additionalInfo.appendChild(infoList);

        rentalDiv.appendChild(img);
        rentalDiv.appendChild(productName);
        rentalDiv.appendChild(additionalInfo);

        fleetContainer.appendChild(rentalDiv);
      });
    })
    .catch(error => {
      console.error('Error fetching JSON:', error);
    });
});
