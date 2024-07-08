import React, { useEffect } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm.jsx";
import TaskColumn from "./components/TaskColumn.jsx";
import todoIccon from "./assets/direct-hit.png";
import doingIccon from "./assets/glowing-star.png";
import doneIccon from "./assets/check-mark-button.png";
import { useState } from "react";

const oldTasks = localStorage.getItem("tasks");

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTask = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTask);
  };
  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <header className="header_section"></header>
      <main className="app_main">
        <TaskColumn
          title="To Do"
          iccon={todoIccon}
          tasks={tasks}
          status="todo"
          handleDelete={handleDelete}
        />
        <TaskColumn
          title="Doing"
          iccon={doingIccon}
          tasks={tasks}
          status="doing"
          handleDelete={handleDelete}
        />
        <TaskColumn
          title="Done"
          iccon={doneIccon}
          tasks={tasks}
          status="done"
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
};

export default App;
