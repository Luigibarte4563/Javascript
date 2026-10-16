// Secure Dynamic Task Manager - app.js

// DOM Element References
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const loadSamplesBtn = document.getElementById('loadSamplesBtn');
const taskList = document.getElementById('taskList');
const taskMessage = document.getElementById('taskMessage');
const totalCount = document.getElementById('totalCount');
const pendingCount = document.getElementById('pendingCount');
const completedCount = document.getElementById('completedCount');

// Task ID Counter
let taskIdCounter = 0;

/**
 * Generates a unique task ID
 * @returns {string} Unique task ID starting with "task-"
 */
function generateTaskId() {
    taskIdCounter++;
    return `task-${taskIdCounter}`;
}

/**
 * Creates and returns a task item element with all required structure
 * @param {string} taskText - The text content for the task
 * @param {string} taskId - Unique identifier for the task
 * @returns {HTMLLIElement} The created task item element
 */
function createTaskElement(taskText, taskId) {
    // Create the task item container
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    taskItem.dataset.taskId = taskId;
    taskItem.dataset.state = 'pending';

    // Create task text span
    const taskTextSpan = document.createElement('span');
    taskTextSpan.className = 'task-text';
    taskTextSpan.textContent = taskText;

    // Create Complete button
    const completeBtn = document.createElement('button');
    completeBtn.className = 'complete-btn';
    completeBtn.textContent = 'Complete';
    completeBtn.type = 'button';

    // Create Edit button
    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';
    editBtn.type = 'button';

    // Create Remove button
    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.textContent = 'Remove';
    removeBtn.type = 'button';

    // Append all children to task item
    taskItem.appendChild(taskTextSpan);
    taskItem.appendChild(completeBtn);
    taskItem.appendChild(editBtn);
    taskItem.appendChild(removeBtn);

    return taskItem;
}

/**
 * Validates task text input
 * @param {string} text - The text to validate
 * @returns {boolean} True if valid, false otherwise
 */
function validateTaskText(text) {
    return text !== null && text.trim().length > 0;
}

/**
 * Updates the task count display
 */
function updateTaskCounts() {
    const taskItems = taskList.querySelectorAll('.task-item');
    let total = 0;
    let pending = 0;
    let completed = 0;

    taskItems.forEach(item => {
        total++;
        if (item.dataset.state === 'completed') {
            completed++;
        } else {
            pending++;
        }
    });

    totalCount.textContent = total;
    pendingCount.textContent = pending;
    completedCount.textContent = completed;
}

/**
 * Adds a new task to the list
 * @param {string} taskText - The text for the new task
 */
function addTask(taskText) {
    // Validate input
    if (!validateTaskText(taskText)) {
        taskMessage.textContent = 'Task cannot be empty';
        return;
    }

    // Clear any previous error message
    taskMessage.textContent = '';

    // Generate unique ID and create task element
    const taskId = generateTaskId();
    const taskElement = createTaskElement(taskText.trim(), taskId);

    // Append to task list
    taskList.appendChild(taskElement);

    // Clear input
    taskInput.value = '';

    // Update counts
    updateTaskCounts();
}

/**
 * Toggles the completed state of a task
 * @param {HTMLLIElement} taskItem - The task item element
 */
function toggleTaskComplete(taskItem) {
    const isCompleted = taskItem.dataset.state === 'completed';

    // Flip the visual state with classList.toggle (second argument forces the result)
    taskItem.classList.toggle('completed', !isCompleted);

    // Flip the data-state between "pending" and "completed"
    taskItem.dataset.state = isCompleted ? 'pending' : 'completed';

    updateTaskCounts();
}

/**
 * Begins editing a task by replacing text with input field
 * @param {HTMLLIElement} taskItem - The task item element
 */
function beginTaskEdit(taskItem) {
    const taskTextSpan = taskItem.querySelector('.task-text');
    const editBtn = taskItem.querySelector('.edit-btn');
    
    // Get current text
    const currentText = taskTextSpan.textContent;
    
    // Create edit input
    const editInput = document.createElement('input');
    editInput.className = 'edit-input';
    editInput.type = 'text';
    editInput.value = currentText;
    editInput.setAttribute('aria-label', 'Edit task');
    
    // Replace span with input
    taskItem.replaceChild(editInput, taskTextSpan);
    
    // Change Edit button to Save
    editBtn.textContent = 'Save';
    
    // Focus the input
    editInput.focus();
}

/**
 * Saves the edited task text
 * @param {HTMLLIElement} taskItem - The task item element
 */
function saveTaskEdit(taskItem) {
    const editInput = taskItem.querySelector('.edit-input');
    const editBtn = taskItem.querySelector('.edit-btn');
    
    // Validate input
    if (!validateTaskText(editInput.value)) {
        taskMessage.textContent = 'Task cannot be empty';
        editInput.focus();
        return;
    }
    
    // Clear any previous error message
    taskMessage.textContent = '';
    
    // Create new text span with sanitized content
    const newTextSpan = document.createElement('span');
    newTextSpan.className = 'task-text';
    newTextSpan.textContent = editInput.value.trim();
    
    // Replace input with span
    taskItem.replaceChild(newTextSpan, editInput);
    
    // Change Save button back to Edit
    editBtn.textContent = 'Edit';
}

/**
 * Removes a task from the DOM
 * @param {HTMLLIElement} taskItem - The task item element to remove
 */
function removeTask(taskItem) {
    taskItem.remove();
    updateTaskCounts();
}

/**
 * Delegated click handler for task list actions
 * @param {MouseEvent} event - The click event
 */
function handleTaskListClick(event) {
    const target = event.target;
    
    // Find the parent task item
    const taskItem = target.closest('.task-item');
    if (!taskItem) return;
    
    // Handle Complete button
    if (target.matches('.complete-btn')) {
        toggleTaskComplete(taskItem);
        return;
    }
    
    // Handle Edit/Save button
    if (target.matches('.edit-btn')) {
        const isEditing = taskItem.querySelector('.edit-input') !== null;
        if (isEditing) {
            saveTaskEdit(taskItem);
        } else {
            beginTaskEdit(taskItem);
        }
        return;
    }
    
    // Handle Remove button
    if (target.matches('.remove-btn')) {
        removeTask(taskItem);
        return;
    }
}

/**
 * Loads sample tasks using DocumentFragment for performance
 */
function loadSampleTasks() {
    const sampleTasks = [
        'Review DOM selectors',
        'Practice createElement',
        'Study event delegation'
    ];
    
    // Create document fragment
    const fragment = document.createDocumentFragment();
    
    // Create each sample task and add to fragment
    sampleTasks.forEach(taskText => {
        const taskId = generateTaskId();
        const taskElement = createTaskElement(taskText, taskId);
        fragment.appendChild(taskElement);
    });
    
    // Append fragment to task list once
    taskList.appendChild(fragment);
    
    // Update counts
    updateTaskCounts();
    
    // Clear any error message
    taskMessage.textContent = '';
}

// Event Listeners

// Add Task button click
addTaskBtn.addEventListener('click', () => {
    addTask(taskInput.value);
});

// Enter key in task input
taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTask(taskInput.value);
    }
});

// Load Sample Tasks button click
loadSamplesBtn.addEventListener('click', loadSampleTasks);

// Delegated click listener for task actions
taskList.addEventListener('click', handleTaskListClick);

// Initialize counts on page load
updateTaskCounts();
