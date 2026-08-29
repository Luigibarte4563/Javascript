let student = ["Luigi", "John", "Maria"];

for(let i = 0; i < student.length; i++) {
    console.log(student[i]);
}

// for..of
for(let students of student) {
    console.log(student);
}