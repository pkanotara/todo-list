document.getElementById("task-form").addEventListener("submit", function (event) {
  event.preventDefault();
  
  const newTaskInput = document.getElementById("new-task");
  const dueDateInput = document.getElementById("due-date");
  const taskList = document.getElementById("task-list");

  if (!newTaskInput.value.trim()) return;

  const li = document.createElement("li");
  const dueDate = dueDateInput.value || "No due date";

  li.innerHTML = `<span>${newTaskInput.value}</span> <span>Due Date: ${dueDate}</span> <button>Delete</button>`;
  taskList.appendChild(li);

  newTaskInput.value = "";
  dueDateInput.value = "";

  li.addEventListener("click", () => li.classList.toggle("completed"));
  li.querySelector("button").addEventListener("click", () => li.remove());
});
