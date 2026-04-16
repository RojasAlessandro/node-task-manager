const { addTask, listTasks } = require("./taskManager"); // This means “Go to the file taskManager.js, take the things it exported, and give me addTask and listTasks so I can use them here.”

const command = process.argv[2];
const value = process.argv[3];

if (command === "add") {
  if (!value) {
    console.log("Please enter a task.");
  } else {
    addTask(value);
  }
} else if (command === "list") {
  listTasks();
} else {
  console.log("Unknown command.");
}