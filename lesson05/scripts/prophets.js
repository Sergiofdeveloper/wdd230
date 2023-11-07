// Declare a constant variable named "url" that contains the URL string of the JSON resource.
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

// Declare a constant variable named "cards" that selects the HTML div element with an id value of "cards."
const cards = document.querySelector('#cards');

// Create an asynchronous function named "getProphetData" to fetch data from the JSON source URL.
const getProphetData = async () => {
  try {
    // Fetch data from the JSON source using the "fetch" method.
    const response = await fetch(url);

    // Convert the response to a JSON object.
    const data = await response.json();

    // Add a console.table() expression to check the data response in the console.
    console.table(data);

    // Call the function "displayProphets" with "data.prophets" as the argument.
    displayProphets(data.prophets);
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

// Call the "getProphetData" function to initiate the data retrieval and processing.
getProphetData();

// Define a function expression named "displayProphets" that handles a single parameter named "prophets."
const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
      const card = document.createElement('section');
      // adds class for the styles
      card.classList.add('prophet-card'); 
      const fullName = document.createElement('h2');
      const portrait = document.createElement('img');
      
      // Create a "p" element for "Date of Birth" and "Place of Birth."
      const dateOfBirth = document.createElement('p');
      const placeOfBirth = document.createElement('p');
  
      fullName.textContent = `${prophet.name} ${prophet.lastname}`;
      
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `${prophet.name} ${prophet.lastname}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      // Set the "textContent" for "Date of Birth" and "Place of Birth."
      dateOfBirth.textContent = `Date of Birth: ${prophet.birthdate}`;
      placeOfBirth.textContent = `Place of Birth: ${prophet.birthplace}`;
  
      card.appendChild(fullName);
      card.appendChild(dateOfBirth);
      card.appendChild(placeOfBirth);
      card.appendChild(portrait);
      
      cards.appendChild(card);
    });
  };
