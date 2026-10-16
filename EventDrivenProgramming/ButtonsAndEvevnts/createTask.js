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
