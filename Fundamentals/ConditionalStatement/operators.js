let studentName = "Luigi";
let grade = 88;
let attendance = 90;

function checkStudent(name, grade, attendance) {

    if (grade >= 75 && attendance >= 80) {

        return `${name} passed!`;

    } else {

        return `${name} failed.`;

    }
}

let result = checkStudent(
    studentName,
    grade,
    attendance
);

console.log(result);