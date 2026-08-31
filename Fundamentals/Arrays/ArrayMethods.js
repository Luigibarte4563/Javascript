// for each

const fruits = ["Apple", "Banana", "Orange"];

for (let fruits of fruits) {
    console.log(fruit);
}

// for each function
fruits.forEach(function(fruit) {
    console.log(fruit);
});

// using arrow function
fruits.forEach(fruits => {
    console.log(fruit);
});