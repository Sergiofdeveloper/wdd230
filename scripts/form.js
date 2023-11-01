function checkPassword() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const wrongPassword = document.getElementById("wrongPassword");

    if (password !== confirmPassword) {
        wrongPassword.textContent = "Passwords do not match.";
    } else {
        wrongPassword.textContent = "";
    }
}

function updateRangeValue(value) {
    document.getElementById("rangeValue").textContent = value;
}