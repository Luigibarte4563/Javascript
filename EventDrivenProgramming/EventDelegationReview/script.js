const list = document.getElementById("students");

list.addEventListener("click", function() {
    if (event.target.tagName === "LI") {
        console.log(event.target.textContent);
    }
});