import {add, subtract} from './math.js';
import { students, getAverageGrade } from './student.js';

console.log(add(5,10));
console.log(subtract(5,10));

console.log(students[0].name);
console.log(students[1].name);

let label = document.querySelector("#label");
let search = document.querySelector("#search");

function searchNameGrade() {
    const number = Number(search.value);

    if (number >= 1 && number <= students.length) {
        const student = students[number - 1];

        label.textContent = `Name: ${student.name} - Grade: ${student.grade}`;
    } else {
        label.textContent = "Student not found";;
    }
}

search.addEventListener('input', searchNameGrade);

