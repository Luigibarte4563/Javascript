const nameInput = document.querySelector("#nameInput");
const greetButton = document.querySelector("#greetButton");
const message = document.querySelector("#message");

greetButton.addEventListener("click", function() {
    const name = nameInput.value.trim();

    if (name === "") {
        message.textContent = "Please enter your name";
        message.style.color = "red";
        return;
    }

    message.textContent = "Hello, " + name + "!";
    message.style.color = "green";
})