let card = document.getElementById("card");
let message = document.getElementById("message");

let changeButton = document.getElementById("changeButton");
let roundButton = document.getElementById("roundButton");
let colorButton = document.getElementById("colorButton");

changeButton.addEventListener('click', function() {
    message.textContent = "You clicked the button!";
});

colorButton.addEventListener('click', function() {
    card.classList.toggle("blue");
});

roundButton.addEventListener('click', function() {
    card.classList.toggle("round");
});