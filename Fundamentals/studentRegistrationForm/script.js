const form = document.getElementById("studentForm");

const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const ageInput = document.getElementById("ageInput");

const message = document.getElementById("message");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const age = Number(ageInput.value);

    if (name === "") {
        message.textContent = "Please enter your name.";
        return;
    }

    if (email === "") {
        message.textContent = "Please enter your email.";
        return;
    }

    if (Number.isNaN(age) || age < 18) {
        message.textContent = "You must be at least 18 years old.";
        return;
    }

    message.textContent = "Registration successful!";
    message.textContent = "Congrats";
});