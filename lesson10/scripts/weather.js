const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// Coordenadas para Trier, Alemania
const latitude = 49.748487982922164;
const longitude = 6.62713680046347;

const apiKey = 'ae5b4837b97484434881ec52071a552a';

// Declara una variable constante llamada "url" y asígnale una cadena de URL válida según la documentación de la API de openweathermap.
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

// Define una función asíncrona llamada "apiFetch()" que utilice un bloque try para manejar errores.
async function apiFetch() {
    try {
        // Almacena los resultados de la solicitud de URL en una variable llamada "response".
        const response = await fetch(url);

        // Si la respuesta es OK, almacena el resultado de la conversión response.json() en una variable llamada "data",
        // y muestra los resultados en la consola para hacer pruebas.
        if (response.ok) {
            const data = await response.json();
            console.log(data);

           // Extrae el primer evento meteorológico del array.
           const weatherEvent = data.weather[0];

           // Muestra la temperatura y la descripción del clima en la página web
           currentTemp.textContent = `${data.main.temp}°F`;
           captionDesc.textContent = weatherEvent.description;

           //Utiliza el código del icono para construir la URL del icono meteorológico. 
           const iconCode = weatherEvent.icon;
           const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

           // establece el atributo src del elemento del icono meteorológico.
           weatherIcon.src = iconUrl;
           weatherIcon.alt = weatherEvent.description;

           displayResults(data);

       } else {
           
           throw Error(await response.text());
       }
   } catch (error) {
      
       console.error(error);
   }
}
function displayResults(data) {
    const iconCode = data.weather[0].icon;
    const iconSrc = `https://openweathermap.org/img/w/${iconCode}.png`;

    // Formatea temperatura para no mostrar decimales
    const temperature = data.main.temp.toFixed(0);
    
    let desc = data.weather[0].description;
    desc = desc.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());

    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}- ${temperature}°F`;
}

apiFetch();