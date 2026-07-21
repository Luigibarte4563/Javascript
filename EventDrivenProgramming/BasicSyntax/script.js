// element.addEventListener("event", function);

// button.addEventListener("click", function() {
//     console.log("Hello");
// });

let button = document.getElementById("button");
let hello = document.getElementById("hello");

button.addEventListener("click", function() {
    alert("Hello");
});

hello.addEventListener("click", function() {
    alert("hello");
});

// Useful Event Properties

button.addEventListener("click", function() {
    console.log(event.target);
});

// event.type

button.addEventListener("click", function() {
    console.log(event.type);
});