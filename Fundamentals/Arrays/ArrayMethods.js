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

const numbers = [1, 2, 3, 4, 5];

const result = numbers.filter(number >= number > 2);

comsole.log(result);