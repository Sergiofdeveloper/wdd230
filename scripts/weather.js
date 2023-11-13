  document.addEventListener('DOMContentLoaded', function () {
 
    const apiKey = 'ae5b4837b97484434881ec52071a552a';

    // Coordinates for Zaragoza, Spain
    const latitude = 41.6221;
    const longitude = -0.8716;

    // URL for the OpenWeatherMap API
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;


    const temperatureElement = document.getElementById('temperature');
    const descriptionElement = document.getElementById('description');
    const weatherIconElement = document.querySelector('.weather-icon');
    
    function capitalizeWords(str) {
        return str.replace(/\b\w/g, char => char.toUpperCase());
      }

    // Fetching data from OpenWeatherMap
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Updating the information card with weather data
        const temperature = data.main.temp;
        const description = capitalizeWords(data.weather[0].description);
        const iconCode = data.weather[0].icon;

        temperatureElement.textContent = `${temperature}°C`;
        descriptionElement.textContent = `Condition: ${description}`;

        // Updating the weather icon
        const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
        weatherIconElement.innerHTML = `<img src="${iconUrl}" alt="${description}">`;
      })
      .catch(error => console.error('Error fetching weather data:', error));
  });
 
