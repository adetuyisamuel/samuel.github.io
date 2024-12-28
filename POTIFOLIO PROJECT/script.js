// Select DOM Elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add Task Function
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create a new list item
  const taskItem = document.createElement("li");

  // Task text
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  // Delete button
  
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(taskItem); // Remove the task item from the list
  });

  // Append task text and delete button to the list item
  taskItem.appendChild(taskSpan);
  taskItem.appendChild(deleteBtn);

  // Add the list item to the task list
  taskList.appendChild(taskItem);

  // Clear the input field
  taskInput.value = "";
});
