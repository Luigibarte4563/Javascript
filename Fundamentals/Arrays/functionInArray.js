let numbers = [10, 20, 30, 40, 50];

function showNumber(number) {
    console.log(number);
}

// foreach
numbers.forEach(showNumber);    

// forEach using arrow Function
numbers.forEach((number) => {
    console.log(number)
});

// forEach with index
numbers.forEach((number, index) => {
    console.log(index, number);
}); 

// map()

let double = numbers.map(number => number * 2);

console.log(double);

// filter()
let evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers);

// find()
let result = numbers.filter(number => number > 12);

console.log(result)

export function searchNumber(number) {
    return numbers.filter(number => {
        number.name.toLowerCase();
    });
}
