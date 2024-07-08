# TaskTrek

TaskTrek is a simple and intuitive task management application built with React. It allows you to organize your tasks using different statuses and tags, helping you stay productive and on top of your to-do list.

## Features

- **Add Tasks**: Quickly add new tasks with a title, status, and tags.
- **Organize Tasks**: Categorize tasks into "To Do", "Doing", and "Done" columns.
- **Tagging**: Use tags like HTML, CSS, JavaScript, and React to label your tasks.
- **Persistent Storage**: Saves your tasks in local storage so you don't lose them on page refresh.
- **Delete Tasks**: Easily delete tasks when they are no longer needed.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/tasktrek.git
    cd tasktrek
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the application:
    ```bash
    npm start
    ```

The app will be available at `http://localhost:3000`.

## Usage

1. **Adding a Task**: Use the input field at the top to enter a new task. Select the status and tags before adding the task.
2. **Managing Tasks**: View your tasks organized into columns based on their status. Click on the tags to filter tasks.
3. **Deleting a Task**: Click the delete icon next to a task to remove it from the list.

## Components

- **App**: The main component that holds the state and renders the other components.
- **TaskForm**: A form to add new tasks.
- **TaskColumn**: A column that displays tasks based on their status.
- **TaskCard**: A card that displays an individual task.
- **Tag**: A button component used to display and select tags.

.
├── public
│ └── index.html
├── src
│ ├── assets
│ │ ├── check-mark-button.png
│ │ ├── delete.png
│ │ ├── direct-hit.png
│ │ └── glowing-star.png
│ ├── components
│ │ ├── TaskCard.jsx
│ │ ├── TaskCard.css
│ │ ├── TaskColumn.jsx
│ │ ├── TaskColumn.css
│ │ ├── TaskForm.jsx
│ │ ├── TaskForm.css
│ │ ├── Tag.jsx
│ │ └── Tag.css
│ ├── App.jsx
│ ├── App.css
│ ├── index.js
│ └── index.css
└── package.json
