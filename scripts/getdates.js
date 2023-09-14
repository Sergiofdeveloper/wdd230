const currentYearSpan = document.getElementById("currentYear");
const lastModifiedParagraph = document.getElementById("lastModified");
const lastModified = new Date(document.lastModified);

const formattedDate = lastModified.toLocaleDateString();
const formattedTime = lastModified.toLocaleTimeString();

currentYearSpan.textContent = new Date().getFullYear();
lastModifiedParagraph.textContent = "Last Modified: " + formattedDate + " " + formattedTime;