export const students = [
    {
        name: "Luigi",
        grade: 90
    },
    {
        name: "Maria",
        grade: 85
    },
    {
        name: "John",
        grade: 78
    }
];

export function getAverageGrade() {{
    let total = 0;

    for(const student of students) {
        total += student.grade;
    }

    return total / students.length;
}}