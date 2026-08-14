let input = document.querySelector("#input");
let heading = document.querySelector("#heading");
let submit = document.querySelector("#submit");
let label = document.querySelector("#label");
let changeBg = document.querySelector("#changeBgColor");
let reset = document.querySelector("#resetBtn");

function displayGreetings() {
    if(input.value === "") {
        heading.textContent = "Please enter your name";
    } else {
        heading.textContent = "Hello " + input.value.trim() + "!";
    }
}
function showType() {
    label.textContent = "You are typing: " + input.value;
}

function changeBackgound() {
    document.body.style.backgroundColor = "blue";
}

function resetDisplay() {
    heading.textContent = "Type a you're name";
    input.value = "";
    label.textContent = "";
    document.body.style.backgroundColor = "#f3f4f6";
}

submit.addEventListener("click", displayGreetings);
input.addEventListener("input", showType);
changeBg.addEventListener("click", changeBackgound);
reset.addEventListener("click", resetDisplay);