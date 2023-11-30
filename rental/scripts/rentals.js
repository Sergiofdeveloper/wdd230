document.addEventListener('DOMContentLoaded', function () {
  const rentalsTableContainer = document.getElementById('rentalsTableContainer');

  // Function to create and populate the table
  function createRentalsTable(data) {
    const table = document.createElement('table');

    // Create table header
    const headerRow = table.insertRow();
    for (const key in data.rentals[0]) {
      const th = document.createElement('th');
      th.textContent = key;
      headerRow.appendChild(th);
    }

    // Create table rows
    data.rentals.forEach(rental => {
      const row = table.insertRow();
      for (const key in rental) {
        const cell = row.insertCell();

        if (key === 'Image') {
          const img = document.createElement('img');
          img.src = rental[key];
          img.alt = rental['Rental Type'];
          img.loading = 'lazy';  
          cell.appendChild(img);
        } else if (typeof rental[key] === 'object') {
          for (const subKey in rental[key]) {
            const subCell = document.createElement('div');
            subCell.textContent = `${subKey}: ${rental[key][subKey]}`;
            cell.appendChild(subCell);
          }
        } else {
          cell.textContent = rental[key];
        }
      }
    });

    rentalsTableContainer.appendChild(table);
  }

  // Fetch JSON data
  fetch('data/rentals.json')
    .then(response => response.json())
    .then(data => {
      // Call the function with the retrieved JSON data
      createRentalsTable(data);
    })
    .catch(error => {
      console.error('Error fetching JSON:', error);
    });
});
