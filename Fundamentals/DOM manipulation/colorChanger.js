    let bodyColor = document.getElementById("body");
    let colorGreen = document.getElementById("green");
    let colorRed = document.getElementById("red");
    let colorYellow = document.getElementById("yellow");

    colorGreen.addEventListener("click", function() {
        bodyColor.style.backgroundColor = "green";
    });

    colorRed.addEventListener("click", function() {
        bodyColor.style.backgroundColor = "red";
    });

    colorYellow.addEventListener("click", function() {
        bodyColor.style.backgroundColor = "yellow";
    });