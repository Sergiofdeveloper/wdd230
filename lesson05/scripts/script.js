    const inputElement = document.getElementById('favchap');
    const buttonElement = document.querySelector('button');
    const listElement = document.getElementById('list');    

    // Añade un click event listener al boton
    buttonElement.addEventListener('click', () => {
        // Recoge el valor del input
        const chapterName = inputElement.value;

        // verifica si el input no esta en blanco
        if (chapterName.trim() !== '') {
            // Crea un nuevo item en la lista
            const listItem = document.createElement('li');
            // Selecciona el contenido para el item de la lista
            listItem.textContent = chapterName;

             // Crea un boton de borrar
            const deleteButton = document.createElement('button');
            deleteButton.textContent = '❌';

             // Añade un event listner al boton de borrar
            deleteButton.addEventListener('click', function () {
            
                // Quita el elemento de la lista cuando el boton de borrar es clickado
                    listElement.removeChild(listItem);
                    inputElement.focus();
            });
            
            // Adjunta el botond de borrado a la lista de items
            listItem.appendChild(deleteButton);

            // Añade el item a la lista
            listElement.appendChild(listItem);

            // limpia el campo del input
            inputElement.value = '';

             // Manda de nuevo el cursor al campo de entrada de texto
            inputElement.focus();   

        } else {
            // muestra un mensaje
            alert('Please enter a chapter from the Book of Mormon');
            inputElement.focus();
        }
    });