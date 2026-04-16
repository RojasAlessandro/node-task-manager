function addTask(taskText) {
  console.log("You chose to add a task.");
  console.log("Task text:", taskText);
}

function listTasks() {
  console.log("You chose to list tasks.");
}

module.exports = {
  addTask,
  listTasks
}; // Without module.exports, these functions stay trapped inside taskManager.js.