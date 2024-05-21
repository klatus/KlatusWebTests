function validateEmail(email) {
    // Regular expression pattern for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email matches the pattern
    if (emailPattern.test(email)) {
        return true; // Email is valid
    } else {
        return false; // Email is invalid
    }
}

function handleSubmit() {
    // Get the email input value
    const emailInput = document.getElementById("email").value;

    // Validate the email
    if (validateEmail(emailInput)) {
        alert("Email is valid!");
    } else {
        alert("Email is invalid!");
    }
}