    let usernameInput = document.getElementById("username");
    let passwordInput = document.getElementById("password");
    let submit = document.getElementById("submitBtn");

    submit.addEventListener("click", function() {
        if (usernameInput.value == "luwe" && passwordInput.value == "barts123") {
            alert(`Welcome ${usernameInput.value}`);
        } else {
            alert("Wrong Credentials");
        }
    });