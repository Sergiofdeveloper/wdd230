const inputElement = document.getElementById('favchap');
const buttonElement = document.querySelector('button');
const listElement = document.getElementById('list');

// Funcion para obtener la lista de capítulos desde localStorage
function getChapterList() {
  const chapters = localStorage.getItem('myFavBOMList');
  return chapters ? JSON.parse(chapters) : [];
}

// Comienza chaptersArray con la lista de capitulos desde localStorage o un array vacio
let chaptersArray = getChapterList() || [];

// Funcion muestra un capítulo en la lista
function displayList(item) {
  let listItem = document.createElement('li');
  let deleteButton = document.createElement('button');
  listItem.textContent = item;

  deleteButton.textContent = '❌';
  deleteButton.classList.add('delete'); // Agrega una clase CSS para darle estilo al botón de eliminación

  listItem.appendChild(deleteButton);
  listElement.appendChild(listItem);

  deleteButton.addEventListener('click', function () {
    listElement.removeChild(listItem);
    deleteChapter(item); // Llama a la funcion para eliminar el capitulo del array y localStorage
    inputElement.focus(); // Establece el enfoque nuevamente en el campo de entrada
  });
}

// Funcion para actualizar localStorage con el chaptersArray actual
function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// Rellena la lista de capitulos mostrada utilizando forEach
chaptersArray.forEach(item => {
  displayList(item);
});

// Agregar un evento de clic al boton
buttonElement.addEventListener('click', () => {
  if (inputElement.value !== '') {
    displayList(inputElement.value);
    chaptersArray.push(inputElement.value);
    setChapterList();
    inputElement.value = '';
    inputElement.focus();
  }
});
