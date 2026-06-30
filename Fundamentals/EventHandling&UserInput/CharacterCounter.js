    let message = document.getElementById("message");
    let count = document.getElementById("count");

    message.addEventListener("input", function() {
        count.textContent = "Characters: " + message.value.length;
    });