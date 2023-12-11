document.addEventListener("DOMContentLoaded", function() {
    const weatherContainer = document.getElementById("weather-container");
    const forecastContainer = document.getElementById("forecast-container");

    const apiKey = 'ae5b4837b97484434881ec52071a552a';
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Cozumel&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const tomorrowForecast = data.list.find(item => {
                const forecastDateTime = new Date(item.dt_txt);
                return forecastDateTime.getDate() === new Date().getDate() + 1 && forecastDateTime.getHours() === 15;
            });

            if (tomorrowForecast) {
                const temperature = (tomorrowForecast.main.temp - 273.15).toFixed(2); // Convert Kelvin to Celsius
                const weatherDescription = tomorrowForecast.weather[0].description;
                const icon = `https://openweathermap.org/img/w/${tomorrowForecast.weather[0].icon}.png`;

                const forecastCard = document.createElement("div");
                forecastCard.classList.add("weather-card");

                forecastCard.innerHTML = `
                    <img src="${icon}" alt="${weatherDescription}">
                    <p><strong>Tomorrow at 3:00 PM:</strong></p>
                    <p><strong>Temperature:</strong> ${temperature} &deg;C</p>
                    <p><strong>Weather:</strong> ${weatherDescription}</p>
                `;

                forecastContainer.appendChild(forecastCard);
            } else {
                console.error('No forecast data available for tomorrow at 3:00 PM');
            }
        })
        .catch(error => console.error('Error fetching weather forecast data:', error));
});
