let nameInput = document.querySelector("#nameInput");
let greetButton = document.querySelector("#greetButton");
let reset = document.querySelector("#reset");
let bgcolor = document.querySelector("#bgcolor");
let result = document.querySelector("#result");

function displayGreeting() {
    const name = nameInput.value.trim();

    if (name === "") {
        result.textContent = "Enter your name first";
    } else {
        result.textContent = "Hello " + name + "!";
    }
}

function clear() {
    result.textContent = "";
    nameInput.value = "";
    document.body.style.backgroundColor = "white";
}

bgcolor.addEventListener("click", function() {
    document.body.style.backgroundColor = "black";
});

greetButton.addEventListener("click", displayGreeting);
reset.addEventListener("click", clear);

