const title = document.getElementById("title");
const message = document.getElementById("message");

const studentName = document.getElementById("studentName");
const addButton = document.getElementById("addButton");

const studentList = document.getElementById("studentList");
const clearButton = document.getElementById("clearButton");


title.textContent = "My Student List";

addButton.addEventListener('click', function() {
    const name = studentName.value.trim();

    if (name === "") {
        message.textContent = "Please enter a student name.";
        return;
    }

    const studentItem = document.createElement('li');

    studentItem.classList.add("student");

    const nameText = document.createElement("span");

    nameText.textContent = name;

    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.classList.add("delete-button");


    deleteButton.addEventListener("click", function() {
        studentItem.remove();
        updateMessage();
    });

    studentItem.appendChild(nameText);
    studentItem.appendChild(deleteButton);

    studentList.appendChild(studentItem);

    studentName.value = "";
    message.textContent = "Student added successfully";
});

function updateMessage() {
    if(studentList.children.length === 0) {
        message.textContent = "No student in the list.";
    } else {
        message.textContent = "student remove.";
    }
}

clearButton.addEventListener("click", function() {
    studentList.textContent = "";
    message.textContent = "All students have been removed.";

});