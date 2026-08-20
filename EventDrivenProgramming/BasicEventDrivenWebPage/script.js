let pageContainer = document.querySelector("#pageContainer");
let mainHeading = document.querySelector("#mainHeading");
let nameInput = document.querySelector("#nameInput");
let greetingButton = document.querySelector("#greetingButton");
let backgroundButton = document.querySelector("#backgroundButton");
let resetButton = document.querySelector("#resetButton");
let messageArea = document.querySelector("#messageArea");

// Event Handler: Displays a personalized greeting
function displayGreeting() {
    let name = nameInput.value;

    if (name === "") {
        mainHeading.textContent = "Please enter your name first";
    } else {
        mainHeading.textContent = `Hello, ${name}!`;
    }
};

// Event Handler: Changes the webpage background color
function changeBackgroundColor() {
    document.body.style.backgroundColor = "lightyellow";
    console.log("Background color was changed.");
    messageArea.textContent = "Background color was changed.";
}

// Event Handler: Resets the webpage to its original state
function resetDisplay() {
    mainHeading.textContent = "Hello please enter your name";
    nameInput.value = "";
    document.body.style.backgroundColor = "white";
    messageArea.textContent = "";
}

// Event Handler: Displays the text currently being entered
function typing() {
    messageArea.textContent = `You are typing: ${nameInput.value}`;
}

// Event Handler: Displays a message in the browser console
function handleMouseover() {
    console.log("The mouse is over the greeting button.");
}

// Event Source: greetingButton
// Event Listener: click
greetingButton.addEventListener('click', displayGreeting);

// Event Source: backgroundButton
// Event Listener: click
backgroundButton.addEventListener('click', changeBackgroundColor);

// Event Source: resetButton
// Event Listener: click
resetButton.addEventListener('click', resetDisplay);

// Event Source: nameInput
// Event Listener: input
nameInput.addEventListener('input', typing);

// Event Source: greetingButton
// Event Listener: mouseover
greetingButton.addEventListener('mouseover', handleMouseover);