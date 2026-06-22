// Object structure
let student = {
    name: "Luigi",
    age: 20,
    course: "BSIT"
};

// Accessing Object Properties

console.log(student.name);
console.log(student.age);
console.log(student.course);

// Bracket Notation 
console.log(student["name"]);
console.log(student["age"]);
console.log(student["course"]);

// Changing Property Values
student.age = 21;

// Adding new Properties
student.block = "11-ITE-05";

// Removing Properties
delete student.block;

// Objects with Array
let studyante = {
    firstName: "Luigi",
    hobbies: ["Gaming", "Coding", "Running"]
};

// Object witt Function (Methods)
let studyantes = {
    lastName: "Barts",

    greet: function() {
        console.log("Hello");
    }
};

studyantes.greet();