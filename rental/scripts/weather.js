document.addEventListener("DOMContentLoaded", function() {
    const weatherContainer = document.getElementById("weather-container");

    
    const apiKey = 'ae5b4837b97484434881ec52071a552a';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Cozumel&appid=${apiKey}`;

    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            
            const temperature = (data.main.temp - 273.15).toFixed(2); // Convert Kelvin to Celsius
            const humidity = data.main.humidity;
            const weatherDescription = data.weather[0].description;
            const icon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

          
            const weatherCard = document.createElement("div");
            weatherCard.classList.add("weather-card");

            weatherCard.innerHTML = `
                <img src="${icon}" alt="${weatherDescription}">
                <p><strong>Temperature:</strong> ${temperature} &deg;C</p>
                <p><strong>Humidity:</strong> ${humidity}%</p>
                <p><strong>Weather Condition:</strong> ${weatherDescription}</p>
            `;

            weatherContainer.appendChild(weatherCard);
        })
        .catch(error => console.error('Error fetching weather data:', error));
});
