# Node Task Manager

A beginner Node.js project that I am building step by step to learn backend development properly.

## Project Goal

The goal of this project is not just to make a simple task app, but to slowly grow it into a proper Node.js backend project.

I am building this in stages so I can understand each concept clearly instead of copying everything at once.

## What I Want to Learn

Through this project, I want to learn:

- how Node.js runs JavaScript outside the browser
- how to read command-line input using `process.argv`
- how to organize code into multiple files
- how to export and import functions with `module.exports` and `require`
- how to store and read data using JSON files
- how to build CRUD features
- how to use Git and GitHub properly during development
- how to later turn this into an Express API
- how to eventually connect it to a real database

## Project Roadmap

### Milestone 0: Project Setup
- [x] Create project folder
- [x] Create starter files
- [x] Link local project to GitHub
- [x] Initialize Node project with `package.json`

### Milestone 1: Learn Basic Node Input
- [x] Run `app.js` using Node
- [x] Read terminal input with `process.argv`
- [x] Detect commands like `add` and `list`

### Milestone 2: Organize Code Properly
- [x] Move task logic into `taskManager.js`
- [x] Keep `app.js` only for reading commands and routing actions
- [x] Understand `require()` and `module.exports`

### Milestone 3: Save Tasks to File
- [ ] Store tasks in `tasks.json`
- [ ] Load tasks from `tasks.json`
- [ ] Make `add` actually save tasks
- [ ] Make `list` actually display saved tasks

### Milestone 4: Improve Task Structure
- [ ] Store tasks as objects instead of plain text
- [ ] Add fields like:
  - `id`
  - `text`
  - `done`
- [ ] Print tasks in a cleaner format

### Milestone 5: Add More Commands
- [ ] Mark tasks as done
- [ ] Delete tasks
- [ ] Prevent duplicate or empty tasks
- [ ] Add better error messages

### Milestone 6: Refactor and Clean Up
- [ ] Improve function names
- [ ] Make code easier to read
- [ ] Separate file-reading and task logic clearly
- [ ] Practice cleaner commit history on GitHub

### Milestone 7: Convert CLI App into an Express API
- [ ] Install Express
- [ ] Create routes like:
  - `GET /tasks`
  - `POST /tasks`
  - `PATCH /tasks/:id`
  - `DELETE /tasks/:id`
- [ ] Learn about request body, params, and JSON responses

### Milestone 8: Use a Real Database
- [ ] Replace `tasks.json` with a database
- [ ] Learn basic database CRUD
- [ ] Connect Node app to the database

### Milestone 9: Stretch Goals
- [ ] Add a frontend later
- [ ] Add authentication
- [ ] Deploy the project
- [ ] Turn this into a portfolio project

## Current Focus

Right now I am working on the early Node.js foundations:
- reading commands from the terminal
- understanding how files work together
- slowly building the app one feature at a time

## Development Style

I want to build this project milestone by milestone and push each milestone to GitHub after I understand it.

The purpose is to learn by building, not just by copying.

## GitHub Milestone Commits

Examples of milestone commit messages:

- `Initial project setup`
- `Learn process.argv basics`
- `Move task logic into taskManager`
- `Add file-based task storage`
- `Display saved tasks from tasks.json`
- `Add delete task feature`
- `Convert task manager to Express API`

## Notes

This project starts simple on purpose. The long-term goal is to use it as a learning path from beginner Node.js to a more complete backend project.