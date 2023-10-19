// recoje la temperatura y la velocidad del viento del HTML
const temperatureElement = document.getElementById("temperature");
const windSpeedElement = document.getElementById("wind-speed");
const windChillElement = document.getElementById("wind-chill");

// Verifica si la temperatura y el viento cumplen las especificaciones
const temperature = parseFloat(temperatureElement.textContent);
const windSpeed = parseFloat(windSpeedElement.textContent);

if (temperature <= 50 && windSpeed > 3.0) {
  // Calcula la temperatura del viento con la formula
  const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
  
  // Muestra el valor del viento
  windChillElement.textContent = windChill.toFixed(2) + "°F";
   
} else {
  // Muestra "N/A" si el valor del viento no cumple los requerimientos
  windChillElement.textContent = "N/A";

}
