// recoje la temperatura y la velocidad del viento del HTML
const temperatureElement = document.getElementById("temperature");
const windSpeedElement = document.getElementById("wind-speed");
const windChillElement = document.getElementById("wind-chill");

try {
    const temperature = parseFloat(temperatureElement.textContent);
    const windSpeed = parseFloat(windSpeedElement.textContent);

    if (!isNaN(temperature) && !isNaN(windSpeed)) {
        if (temperature <= 50 && windSpeed > 3.0) {
            const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
            windChillElement.textContent = windChill.toFixed(2) + "°F";
        } else {
            windChillElement.textContent = "N/A";
        }
    } else {
        windChillElement.textContent = "N/A";
    }
} catch (error) {
    console.error("Error calculating wind chill:", error);
}