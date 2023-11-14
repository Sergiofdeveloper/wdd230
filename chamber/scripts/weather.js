const apiKey = 'ae5b4837b97484434881ec52071a552a'; // Replace with your OpenWeatherMap API key
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=Zaragoza&appid=${apiKey}&units=imperial`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Zaragoza&appid=${apiKey}&units=imperial`;

function capitalizeWords(str) {
    return str.replace(/\b\w/g, match => match.toUpperCase());
}
// Function to fetch weather data from the API
async function fetchWeather() {
    try {
        // Fetch current weather
        const responseWeather = await fetch(weatherUrl);
        const dataWeather = await responseWeather.json();

        // Fetch 3-hour forecast data
        const responseForecast = await fetch(forecastUrl);
        const dataForecast = await responseForecast.json();

        // Update the temperature, weather description, and wind speed
        temperatureElement.textContent = dataWeather.main.temp.toFixed(2);
        const capitalizedWeatherDescription = capitalizeWords(dataWeather.weather[0].description);
        document.getElementById("weather-description").textContent = capitalizedWeatherDescription;
        windSpeedElement.textContent = dataWeather.wind.speed.toFixed(2);

        // Update the weather icon
        const weatherIcon = document.getElementById("weather-icon");
        weatherIcon.src = `https://openweathermap.org/img/wn/${dataWeather.weather[0].icon}.png`;
        weatherIcon.alt = dataWeather.weather[0].description;

        // Update the wind chill
        const temperature = parseFloat(temperatureElement.textContent);
        const windSpeed = parseFloat(windSpeedElement.textContent);

        if (temperature <= 50 && windSpeed > 3.0) {
            const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
            windChillElement.textContent = windChill.toFixed(2) + "°F";
        } else {
            windChillElement.textContent = "N/A";
        }

        // Update the three-day forecast
        updateForecast(dataForecast.list);

    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

function updateForecast(forecastData) {
    const forecastContainer = document.getElementById("forecast-container");

    // Filter the forecast data to get only one reading per day at 12:00 PM
    const dailyForecast = forecastData.filter(entry => entry.dt_txt.includes("12:00:00"));

    // Display the forecast for the next three days
    for (let i = 0; i < 3; i++) {
        const day = dailyForecast[i];
        if (!day) break; // Break if there is no forecast data for the next three days

        const date = new Date(day.dt * 1000);
        const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });

        const forecastItem = document.createElement("div");
        forecastItem.classList.add("forecast-item");
        forecastItem.innerHTML = `<p>${dayOfWeek}</p><p>${day.main.temp.toFixed(2)}°F</p>`;

        forecastContainer.appendChild(forecastItem);
    }
}

// Call the fetchWeather function when the page loads
window.addEventListener("load", fetchWeather);
