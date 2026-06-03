// age checker 
let age = 17;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor")
}

// score checker
let score = 80;

if (score >= 90) {
    console.log("Excelent");
} else if (score >= 75) {
    console.log("Passed");
} else {
    console.log("Failed");
}

// Logical Operator && and ||
let agei = 20;

if (agei >= 18 && agei <= 30) {
    console.log("Young Adult");
}

let role = "admin";

if (role === "admin" || role === "manager") {
    console.log("Access Granted");
}