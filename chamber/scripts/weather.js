document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'ae5b4837b97484434881ec52071a552a';
    const latitude = 41.6221;
    const longitude = -0.8716;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    const temperatureElement = document.getElementById('temperature');
    const descriptionElement = document.getElementById('weather-description');
    const weatherIconElement = document.getElementById('weather-icon');
    const windSpeedElement = document.getElementById('wind-speed');
    const windChillElement = document.getElementById('wind-chill');

    function capitalizeWords(str) {
        return str.replace(/\b\w/g, char => char.toUpperCase());
    }

    // Function to update the forecast
    function updateForecast(forecastData) {
        const forecastContainer = document.getElementById('forecast-container');

        // Filter the forecast data to get only one reading per day at 12:00 PM
        const dailyForecast = forecastData.filter(entry => entry.dt_txt.includes('12:00:00'));

        // Display the forecast for the next three days
        for (let i = 0; i < 3; i++) {
            const day = dailyForecast[i];
            if (!day) break; // Break if there is no forecast data for the next three days

            const date = new Date(day.dt * 1000);
            const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });

            const forecastItem = document.createElement('div');
            forecastItem.classList.add('forecast-item');
            forecastItem.innerHTML = `<p>${dayOfWeek}</p><p>${day.main.temp.toFixed(2)}°C</p>`;

            forecastContainer.appendChild(forecastItem);
        }
    }

    // Fetching data from OpenWeatherMap
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            temperatureElement.textContent = `${data.main.temp.toFixed(2)}°C`;
            descriptionElement.textContent = `Current Weather: ${capitalizeWords(data.weather[0].description)}`;

            // Updating the weather icon
            const iconUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
            weatherIconElement.src = iconUrl;
            weatherIconElement.alt = capitalizeWords(data.weather[0].description);

            // Fetch three-day forecast data
            const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

            fetch(forecastUrl)
                .then(response => response.json())
                .then(forecastData => {
                    // Call the function to update the forecast
                    updateForecast(forecastData.list);
                })
                .catch(error => console.error('Error fetching forecast data:', error));

            // Update wind-related elements
            windSpeedElement.textContent = `${data.wind.speed.toFixed(2)} m/s`;

            // Update the wind chill using the existing logic
            const temperature = parseFloat(temperatureElement.textContent);
            const windSpeed = parseFloat(windSpeedElement.textContent);

            if (temperature <= 50 && windSpeed > 3.0) {
                const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
                windChillElement.textContent = `${windChill.toFixed(2)}°C`;
            } else {
                windChillElement.textContent = "N/A";
            }
        })
        .catch(error => console.error('Error fetching weather data:', error));
});
