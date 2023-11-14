// Check if today is Monday, Tuesday, or Wednesday
function bannerDay() {
    const today = new Date().getDay();
    return today >= 1 && today <= 3; // 1 is Monday, 2 is Tuesday, 3 is Wednesday
}

// Show or hide the banner based on the day
function showOrHideBanner() {
    const banner = document.getElementById("banner");

    if (bannerDay()) {
        banner.style.display = "block";
    } else {
        banner.style.display = "none";
    }
}

// Close the banner when the close button is clicked
function closeBanner() {
    const banner = document.getElementById("banner");
    banner.style.display = "none";
}

// Call the function to show or hide the banner when the page loads
window.addEventListener("load", showOrHideBanner);
