let age = document.getElementById("age");
let button = document.getElementById("check");
let result = document.getElementById("result");

button.addEventListener("click", function () {

    if (age.value >= 18) {
        result.textContent = "Adult";
    } else {
        result.textContent = "Minor";
    }

});