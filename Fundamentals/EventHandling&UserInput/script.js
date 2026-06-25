let nameInput = document.getElementById("name");
let submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", function() {
    alert(`Hello ${nameInput.value}`);

});