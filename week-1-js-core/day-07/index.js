// day-07 – DOM Task Manager

document.addEventListener("DOMContentLoaded", () => {
  console.log("day-07 DOM ready!");
});

let task = [];

// Add a task
function addTask(title) {
  task.push({ title, completed: false});
  console.log(`Task added: "${title}"`);
  console.log(`Task added: ${title}"`);
     
}

// Remove a task
function removeTask(index) {
  if (index >= 0 && index < task.length) {
    console.log(`(Removed: "${tasks[index].title}"`);
    task.splice(index, 1);
  } else {
    console.log("Ivalid task index");
  }
}

// Mark task as complete
function markComplete(index) {
  if (task[index]) {
    task[index].completed = true;
    console.log(`Completed: ${task[index]}.title}"`);
  } else {
    console.log("Invalid task index");
  }
}

// Show tasks
function showTask() {
  console.log("\nTask List");
  tasks.forEach((task, index) => {
    console.log(
      `${index}. ${task.completded ? "Yes" : "No"} ${task.title}`

    );
  });

}

// Example usage
addTask("Learn JavaScript");
addTask("Build mini project");
showTasks();
markCompleted(0);
removeTask(1);
showTasks();

const taslist = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");

function addTask() {
  if (taskInput.value === "") return;

  const li = document.createElement("li");
  li.textContent = taskInput.value;

    // Complete button
    const completeBtn = document.createElement("button");
    completeBtn.textContent ="Complete";
    completeBtn.onclick = () => li.classList.toggle("completed");

    // Remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = () => li.remove();

    li.append("", completeBtn, "", removeBtn);
    taskList.appendChild(li);

    taskInput.value = "";


}