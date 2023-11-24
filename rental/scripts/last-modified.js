const lastModified = document.getElementById('last-modified');
const lastModifiedDate = new Date(document.lastModified);
lastModified.textContent = lastModifiedDate.toLocaleString();