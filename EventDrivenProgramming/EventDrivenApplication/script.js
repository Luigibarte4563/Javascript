const input = document.getElementById("studentName");
const button = document.getElementById("addStudent");
const list = document.getElementById("studentList");
const total = document.getElementById("total");

button.addEventListener('click', addStudent);

function addStudent() {
    const name = input.value.trim();
    if (name === "") return;
    const li = document.createElement("li");
    li.testContent = name;
    list.appendChild(li);

    updateCounter();
}

function updateCounter() {
    total.textContent = 
        list.children.length + " Students";
}

// Search
search.addEventListener('input', searchStudent);

function searchStudent() {
    console.log(search.value);
}

// List

list.addEventListener('click', function(event){
    if(event.target.tagName === "LI") {
        event.target.remove();
    }
});