document.addEventListener("DOMContentLoaded", function() {
    const weatherContainer = document.getElementById("weather-container");
    const forecastContainer = document.getElementById("forecast-container");
    const highTempMessage = document.getElementById("high-temp-message");

    
    const apiKey = 'ae5b4837b97484434881ec52071a552a';
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=Cozumel&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Cozumel&appid=${apiKey}`;

    // Fetch current weather data
    fetch(currentWeatherUrl)
        .then(response => response.json())
        .then(data => {
             
            const temperature = (data.main.temp - 273.15).toFixed(2); // Convert  to Celsius
            const humidity = data.main.humidity;
            const weatherDescription = data.weather[0].description;
            const icon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

            // Display current weather information
            const weatherCard = document.createElement("div");
            weatherCard.classList.add("weather-card");

            weatherCard.innerHTML = `
                <img src="${icon}" alt="${weatherDescription}">
                <p><strong>Current Temperature:</strong> ${temperature} &deg;C</p>
                <p><strong>Current Humidity:</strong> ${humidity}%</p>
                <p><strong>Weather:</strong> ${weatherDescription}</p>
            `;

            weatherContainer.appendChild(weatherCard);
        })
        .catch(error => console.error('Error fetching current weather data:', error));

    
    fetch(forecastUrl)
        .then(response => response.json())
        .then(data => {
            // Extract forecast information for tomorrow at 3:00 pm
            const tomorrowForecast = data.list.find(item => {
                const forecastDateTime = new Date(item.dt_txt);
                return forecastDateTime.getDate() === new Date().getDate() + 1 && forecastDateTime.getHours() === 15;
            });

            // Display forecast information
            if (tomorrowForecast) {
                const temperature = (tomorrowForecast.main.temp - 273.15).toFixed(2); // Convert Kelvin to Celsius
                const weatherDescription = tomorrowForecast.weather[0].description;
                const icon = `https://openweathermap.org/img/w/${tomorrowForecast.weather[0].icon}.png`;

                const forecastCard = document.createElement("div");
                forecastCard.classList.add("weather-card");

                forecastCard.innerHTML = `
                    <img src="${icon}" alt="${weatherDescription}">
                    <p><strong>Tomorrow at 3:00 PM:</strong></p>
                    <p>Temperature: ${temperature} &deg;C</p>
                    <p>Weather: ${weatherDescription}</p>
                `;

                forecastContainer.innerHTML = ''; 
                forecastContainer.appendChild(forecastCard);
            } else {
                console.error('No forecast data available for tomorrow at 3:00 PM');
            }
        })
        .catch(error => console.error('Error fetching weather forecast data:', error));

    
    fetch(currentWeatherUrl)
        .then(response => response.json())
        .then(data => {
            const highTemp = (data.main.temp_max - 273.15).toFixed(2); // Convert  to Celsius
            highTempMessage.innerHTML = `Highest Temperature Today in Cozumel: ${highTemp} &deg;C <button id="close-message">&times;</button>`;

             
            const closeButton = document.getElementById("close-message");
            if (closeButton) {
                closeButton.addEventListener("click", function() {
                    highTempMessage.style.display = "none";
                });
            }
        })
        .catch(error => console.error('Error fetching high temperature data:', error));
});
