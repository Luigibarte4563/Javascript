// function
function greet() {
    console.log("Hello");
}

greet();
greet();

// function with parameters

function greet(name) {
    console.log("Hello " + name);
}

greet("Luigi");

// returning values

function add(n1, n2) {
    return n1 + n2;
}

let result = add(5, 10);

console.log(result);