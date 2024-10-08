// Create a simple to-do list web page using HTML, CSS, and JavaScript. The page should allow users to:

// Add new tasks to the list.
// Remove tasks from the list.


function addTask() {
  const taskInput = document.querySelector("#taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const taskItem = document.createElement("li");

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.addEventListener("click", function () {
    editTask(taskItem, taskSpan);
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", function () {
    taskItem.remove();
  });

  // Append task text, Edit button, and Delete button to taskItem
  taskItem.appendChild(taskSpan);
  taskItem.appendChild(editBtn);
  taskItem.appendChild(deleteBtn);

  // Append the task item to the task list
  document.querySelector("#taskList").appendChild(taskItem);

  taskInput.value = "";
}


function editTask(taskItem, taskSpan) {
  // Create an input field for editing the task
  const editInput = document.createElement("input");
  editInput.type = "text";
  editInput.value = taskSpan.textContent;
  editInput.className = "edit-input";

  // Replace the task text with the input field
  taskSpan.replaceWith(editInput);
  editInput.focus();

  // Create a Save button
  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Save";

  saveBtn.addEventListener("click", function () {
    const updatedText = editInput.value.trim();
    if (updatedText === "") {
      alert("Task cannot be empty.");
      return;
    }
    // Update the task text and remove the edit input
    taskSpan.textContent = updatedText;
    editInput.replaceWith(taskSpan);
    saveBtn.remove();
  });

  // Append the Save button to the task item
  taskItem.appendChild(saveBtn);
}

let addBtn = document.querySelector("#addTaskBtn");
addBtn.addEventListener("click", addTask);
