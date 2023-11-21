 
    // Fetch JSON data
    fetch('data/members.json')
    .then(response => response.json())
    .then(data => {
        // Filter companies with silver or gold status
        const silverGoldCompanies = data.companies.filter(company => ['Silver', 'Gold'].includes(company.membership_level));

        // Randomly select two or three companies
        const selectedCompanies = getRandomSubset(silverGoldCompanies, 3); // Adjust the number as needed

        // Populate spotlight information
        selectedCompanies.forEach((company, index) => {
            const spotlightDiv = document.getElementById(`spotlight${index + 1}`);
            spotlightDiv.innerHTML = `
                <h3>${company.name}</h3>
                <p>${company.other_information}</p>
                <p>Rating: ${generateStarRating(parseFloat(company.rating))}</p>
            `;
        });

        // Function to get a random subset of an array
        function getRandomSubset(array, size) {
            const shuffled = array.sort(() => Math.random() - 0.5);
            return shuffled.slice(0, size);
        }

        // Function to generate star rating HTML
        function generateStarRating(rating) {
            const maxStars = 5;
            const fullStars = '<span class="star">&#9733;</span>';
            const emptyStars = '<span class="star">&#9734;</span>';
            const starRating = fullStars.repeat(rating) + emptyStars.repeat(maxStars - rating);
            return starRating;
        }
    })
    .catch(error => console.error('Error fetching JSON:', error));