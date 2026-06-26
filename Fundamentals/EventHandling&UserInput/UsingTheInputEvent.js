let username = document.getElementById("username");
let preview = document.getElementById("preview");

username.addEventListener("input", function() {
    preview.textContent = username.value;
});