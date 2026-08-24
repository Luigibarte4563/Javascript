let redLight = document.getElementById("redLight");
let yellowLight = document.getElementById("yellowLight");
let greenLight = document.getElementById("greenLight");

let redButton = document.getElementById("redButton");
let yellowButton = document.getElementById("yellowButton");
let greenButton = document.getElementById("greenButton");

let status = document.getElementById("status");


redButton.addEventListener("click", function () {

    redLight.classList.add("red-active");

    yellowLight.classList.remove("yellow-active");
    greenLight.classList.remove("green-active");

    status.textContent = "STOP";

});


yellowButton.addEventListener("click", function () {

    yellowLight.classList.add("yellow-active");

    redLight.classList.remove("red-active");
    greenLight.classList.remove("green-active");

    status.textContent = "WAIT";

});


greenButton.addEventListener("click", function () {

    greenLight.classList.add("green-active");

    redLight.classList.remove("red-active");
    yellowLight.classList.remove("yellow-active");

    status.textContent = "GO";

});