 
// milliseconds to days constant
const msToDays = 84600000;

// Get the last visit date from localStorage
const lastVisit = localStorage.getItem("lastVisit");

// Initialize display elements
const sidebarMessage = document.getElementById("visit-message");

// Today's date
const theDateToday = new Date();

// Processing
const today = Date.now();

if (lastVisit) {
    // Convert the stored date string to a Date object
    const lastVisitDate = new Date(lastVisit);

    // Calculate the number of days between visits
    let daysBetweenVisits = (today - lastVisitDate.getTime()) / msToDays;

    if (daysBetweenVisits === 1) {
        sidebarMessage.textContent = "You last visited 1 day ago.";
    } else {
        sidebarMessage.textContent = `You last visited ${daysBetweenVisits.toFixed(0)} days ago.`;
    }
} else {
    // If it's the first visit, display a welcome message
    sidebarMessage.textContent = "Welcome! Let us know if you have any questions.";
}

// Store the current visit date in localStorage
localStorage.setItem("lastVisit", today);
 
