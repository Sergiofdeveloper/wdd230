const baseURL = "https://sergiofdeveloper.github.io/wdd230/";
// Definir la URL del archivo JSON
const linksURL = "https://sergiofdeveloper.github.io/wdd230/data/links.json";

// Función asincrónica para obtener los datos del archivo JSON
async function getLinks() {
  try {
    // Realizar la solicitud HTTP GET
    const response = await fetch(linksURL);
    
    // Comprobar si la respuesta es exitosa
    if (response.ok) {
      // Analizar la respuesta como JSON
      const data = await response.json();
      
      // Llamar a la función displayLinks y pasar los datos como argumento
      displayLinks(data);
    } else {
      console.error("No se pudo obtener el archivo JSON.");
    }
  } catch (error) {
    console.error("Ocurrió un error al obtener el archivo JSON:", error);
  }
}

// Función para construir los enlaces de actividades a partir de los datos
function displayLinks(data) {
    const lessons = data.lessons;
  const activityContainer = document.querySelector(".activity-container");

  lessons.forEach((lesson) => {
    const lessonTitle = document.createElement("h3");
    lessonTitle.textContent = `Lesson ${lesson.lesson}`;
    activityContainer.appendChild(lessonTitle);

    const ul = document.createElement("ul");
    lesson.links.forEach((link) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = link.url;
      a.textContent = link.title;
      li.appendChild(a);
      ul.appendChild(li);
    });

    activityContainer.appendChild(ul);
  });
}

getLinks();
